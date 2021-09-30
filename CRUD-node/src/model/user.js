const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = Schema({
  nick: String,
  correo: String,
  password: String,
  nombre: String,
  edad: Number,
  peso: Number,
  genero: String,
  objetivo: String
  
});

module.exports = mongoose.model('user', UserSchema);
