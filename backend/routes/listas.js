const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const Lista = require('../models/Lista');

// GET /listas/atual - retorna (ou cria) a lista do mês corrente
router.get('/atual', auth, async (req, res) => {
  try {
    const agora = new Date();
    const mes = agora.getMonth() + 1;
    const ano = agora.getFullYear();

    let lista = await Lista.findOne({
      $or: [{ owner: req.userId }, { membros: req.userId }],
      mes,
      ano,
    })
      .populate('owner', 'nome email')
      .populate('membros', 'nome email');

    if (!lista) {
      lista = await Lista.create({ owner: req.userId, mes, ano });
      await lista.populate('owner', 'nome email');
    }

    res.json(lista);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// PUT /listas/atual - atualiza produtos, total e orçamento
router.put('/atual', auth, async (req, res) => {
  try {
    const agora = new Date();
    const mes = agora.getMonth() + 1;
    const ano = agora.getFullYear();

    const { produtos, total, orcamento } = req.body;

    const lista = await Lista.findOneAndUpdate(
      { $or: [{ owner: req.userId }, { membros: req.userId }], mes, ano },
      { produtos, total, orcamento },
      { new: true }
    )
      .populate('owner', 'nome email')
      .populate('membros', 'nome email');

    if (!lista) return res.status(404).json({ erro: 'Lista não encontrada' });

    res.json(lista);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// GET /listas/historico - lista todos os meses anteriores
router.get('/historico', auth, async (req, res) => {
  try {
    const agora = new Date();
    const mesAtual = agora.getMonth() + 1;
    const anoAtual = agora.getFullYear();

    const listas = await Lista.find({
      $or: [{ owner: req.userId }, { membros: req.userId }],
      $nor: [{ mes: mesAtual, ano: anoAtual }],
    })
      .sort({ ano: -1, mes: -1 })
      .select('mes ano total orcamento produtos owner createdAt')
      .populate('owner', 'nome');

    res.json(listas);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// POST /listas/reaproveitar/:id - copia produtos de um mês anterior para o mês atual
router.post('/reaproveitar/:id', auth, async (req, res) => {
  try {
    const listaAnterior = await Lista.findById(req.params.id);
    if (!listaAnterior) return res.status(404).json({ erro: 'Lista não encontrada' });

    const agora = new Date();
    const mes = agora.getMonth() + 1;
    const ano = agora.getFullYear();

    // Copia produtos com preço zerado e marcação limpa
    const produtos = listaAnterior.produtos.map((p) => ({
      id: String(Math.random() * 100000),
      nome: p.nome,
      quantidade: p.quantidade,
      preco: 0,
      done: false,
    }));

    const lista = await Lista.findOneAndUpdate(
      { $or: [{ owner: req.userId }, { membros: req.userId }], mes, ano },
      { produtos, total: 0 },
      { new: true, upsert: true }
    )
      .populate('owner', 'nome email')
      .populate('membros', 'nome email');

    res.json(lista);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
