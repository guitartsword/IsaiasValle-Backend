var mongoose = require('mongoose');

var TrabajoSchema = new mongoose.Schema({
  titulo : String,
  descripcion : String,
  cargo: String,
  contacto: String,
  salario: Number
});

module.exports = mongoose.model('Trabajo', TrabajoSchema);
