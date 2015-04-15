'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HorarioSchema = new Schema({
  profesor: String,
  dia: {
    type: String,
    enum: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
  },
  inicio: Date,
  fin: Date
});

var CursoSchema = new Schema({
  division: String,
  nombre: String,
  horarios: [HorarioSchema]
});

module.exports = mongoose.model('Curso', CursoSchema);
