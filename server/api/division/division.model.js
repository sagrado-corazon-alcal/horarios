'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MateriaSchema = new Schema({
  nombre: String,
  profesores: [String]
});

var DivisionSchema = new Schema({
  division: String,
  materias: [MateriaSchema]
});

module.exports = mongoose.model('Division', DivisionSchema);
