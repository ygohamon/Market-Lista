const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  id: String,
  nome: { type: String, required: true },
  quantidade: { type: Number, default: 1 },
  preco: { type: Number, default: 0 },
  done: { type: Boolean, default: false },
});

const ListaSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    membros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    mes: { type: Number, required: true },
    ano: { type: Number, required: true },
    orcamento: { type: Number, default: 0 },
    produtos: [ProdutoSchema],
    total: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Índice para busca rápida por dono/membro + mês/ano
ListaSchema.index({ owner: 1, mes: 1, ano: 1 });

module.exports = mongoose.model('Lista', ListaSchema);
