'use strict';

var _ = require('lodash');
var Horario = require('./horario.model');

// Get list of horarios
exports.index = function(req, res) {
  var horarios = [
    {
      "division": "1°A",
      "horarios": {
        lunes: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        martes: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        miercoles: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        jueves: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        viernes: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        }
      }
    }, {
      "division": "1°B",
      "horarios": {
        lunes: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        martes: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        miercoles: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        jueves: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        viernes: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        }
      }
    }, {
      "division": "2°A",
      "horarios": {
        lunes: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        martes: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        miercoles: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        jueves: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        viernes: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        }
      }
    }, {
      "division": "2°B",
      "horarios": {
        lunes: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        martes: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        miercoles: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        jueves: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        },
        viernes: {
          1: [{ nombre: "Intro", profesor: "Soulignac" }],
          2: [{ nombre: "Intro", profesor: "Soulignac" }],
          3: [{ nombre: "Orga", profesor: "Gomez" }],
          4: [
            { nombre: "Laboratorio de Programación II", profesor: "Aloi", grupo: 1 },
            { nombre: "Redes", profesor: "Carballo", grupo: 2 }
          ]
        }
      }
    }
  ];

  return res.json(200, horarios);
};
