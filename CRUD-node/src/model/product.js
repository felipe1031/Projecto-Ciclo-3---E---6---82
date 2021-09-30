const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
  nombre: String,
  categoria: String,
  peso: String,
  calorias: Number,
  descripcion: String
  
});

module.exports = mongoose.model('product', ProductSchema);
