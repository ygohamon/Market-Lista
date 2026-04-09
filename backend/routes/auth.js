const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const gerarToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

// POST /auth/cadastro
router.post('/cadastro', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha)
      return res.status(400).json({ erro: 'Preencha todos os campos' });

    if (senha.length < 6)
      return res.status(400).json({ erro: 'Senha deve ter ao menos 6 caracteres' });

    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ erro: 'Email já cadastrado' });

    const user = await User.create({ nome, email, senha });
    const token = gerarToken(user._id);

    res.status(201).json({
      token,
      user: { id: user._id, nome: user.nome, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// POST /auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha)
      return res.status(400).json({ erro: 'Preencha email e senha' });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ erro: 'Email ou senha incorretos' });

    const ok = await user.compararSenha(senha);
    if (!ok) return res.status(400).json({ erro: 'Email ou senha incorretos' });

    const token = gerarToken(user._id);

    res.json({
      token,
      user: { id: user._id, nome: user.nome, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;
