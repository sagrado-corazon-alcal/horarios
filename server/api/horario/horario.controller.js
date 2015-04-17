'use strict';

var _ = require('lodash');
var Horario = require('./horario.model');

// Get list of horarios
exports.index = function(req, res) {
  var horarios = [
    {
      "division": "5°B",
      "horarios": {
        "lunes": {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Programacion", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        "martes": [],
        "miercoles": [],
        "jueves": [],
        "viernes": []
      }
    }
  ];

  return res.json(200, horarios);
};
