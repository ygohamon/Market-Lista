const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const User = require('../models/User');
const Lista = require('../models/Lista');

// GET /users/buscar?email=x - busca usuário pelo email
router.get('/buscar', auth, async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) return res.status(400).json({ erro: 'Informe um email' });

    const user = await User.findOne({ email }).select('_id nome email');
    if (!user) return res.status(404).json({ erro: 'Usuário não encontrado' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// POST /users/adicionar-membro - adiciona membro à lista atual
router.post('/adicionar-membro', auth, async (req, res) => {
  try {
    const { userId } = req.body;

    if (userId === req.userId)
      return res.status(400).json({ erro: 'Você já está na lista' });

    const agora = new Date();
    const mes = agora.getMonth() + 1;
    const ano = agora.getFullYear();

    const lista = await Lista.findOneAndUpdate(
      { owner: req.userId, mes, ano },
      { $addToSet: { membros: userId } },
      { new: true }
    ).populate('membros', 'nome email');

    if (!lista) return res.status(404).json({ erro: 'Apenas o dono pode adicionar membros' });

    res.json(lista.membros);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// POST /users/remover-membro - remove membro da lista atual
router.post('/remover-membro', auth, async (req, res) => {
  try {
    const { userId } = req.body;

    const agora = new Date();
    const mes = agora.getMonth() + 1;
    const ano = agora.getFullYear();

    const lista = await Lista.findOneAndUpdate(
      { owner: req.userId, mes, ano },
      { $pull: { membros: userId } },
      { new: true }
    ).populate('membros', 'nome email');

    if (!lista) return res.status(404).json({ erro: 'Apenas o dono pode remover membros' });

    res.json(lista.membros);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// GET /users/perfil
router.get('/perfil', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-senha');
    res.json(user);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
