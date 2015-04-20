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
          1: [{ nombre: "Matemática", profesor: "Grillo" }],
          2: [{ nombre: "Matemática", profesor: "Grillo" }],
          3: [{ nombre: "Inglés", profesor: "Alvarenga" }],
          4: [{ nombre: "Inglés", profesor: "Alvarenga" }],
          5: [{ nombre: "Ciencias Sociales", profesor: "Páramo" }]
        },
        martes: {
          1: [{ nombre: "Educación Artística", profesor: "Cruz" }],
          2: [{ nombre: "Educación Artística", profesor: "Cruz" }],
          3: [{ nombre: "Ciencias Naturales", profesor: "Leonik" }],
          4: [{ nombre: "Ciencias Naturales", profesor: "Leonik" }],
          5: [{ nombre: "Ciencias Sociales", profesor: "Páramo" }],
          6: [{ nombre: "Educación Física", profesor: "Amigo" }]
        },
        miercoles: {
          1: [{ nombre: "Cultura Religiosa", profesor: "Grillo" }],
          2: [{ nombre: "Cultura Religiosa", profesor: "Grillo" }],
          3: [{ nombre: "Ciencias Naturales", profesor: "Leonik" }],
          4: [{ nombre: "Ciencias Naturales", profesor: "Leonik" }],
          5: [{ nombre: "Ciencias Sociales", profesor: "Páramo" }]
        },
        jueves: {
          1: [{ nombre: "Prácticas del Lenguaje", profesor: "Laborde" }],
          2: [{ nombre: "Prácticas del Lenguaje", profesor: "Laborde" }],
          3: [{ nombre: "Matemática", profesor: "Grillo" }],
          4: [{ nombre: "Matemática", profesor: "Grillo" }],
          5: [{ nombre: "Educación Física", profesor: "Amigo" }]
        },
        viernes: {
          1: [{ nombre: "Construcción de la Ciudadanía", profesor: "Barakián" }],
          2: [{ nombre: "Construcción de la Ciudadanía", profesor: "Barakián" }],
          3: [{ nombre: "Prácticas del Lenguaje", profesor: "Laborde" }],
          4: [{ nombre: "Prácticas del Lenguaje", profesor: "Laborde" }],
          5: [{ nombre: "Ciencias Sociales", profesor: "Páramo" }]
        }
      }
    }, {
      "division": "1°B",
      "horarios": {
        lunes: {
          1: [{ nombre: "Inglés", profesor: "Alvarenga" }],
          2: [{ nombre: "Inglés", profesor: "Alvarenga" }],
          3: [{ nombre: "Matemática", profesor: "Guerrero" }],
          4: [{ nombre: "Matemática", profesor: "Guerrero" }],
          5: [
            { nombre: "Educación Física", profesor: "Dodorico", grupo: "Mujeres" },
            { nombre: "Educación Física", profesor: "Cayetano", grupo: "Hombres" }
          ]
        },
        martes: {
          1: [{ nombre: "Cultura Religiosa", profesor: "Moro" }],
          2: [{ nombre: "Cultura Religiosa", profesor: "Moro" }],
          3: [{ nombre: "Educación Artística", profesor: "Cruz" }],
          4: [{ nombre: "Educación Artística", profesor: "Cruz" }],
          5: [{ nombre: "Almuerzo" }],
          6: [
            { nombre: "Lenguajes Tecnológicos", profesor: "Carballo", grupo: 1 },
            { nombre: "Procedimientos Técnicos", profesor: "Lezcano", grupo: 2 }
          ],
          7: [
            { nombre: "Lenguajes Tecnológicos", profesor: "Carballo", grupo: 1 },
            { nombre: "Procedimientos Técnicos", profesor: "Lezcano", grupo: 2 }
          ]
        },
        miercoles: {
          1: [{ nombre: "Ciencias Naturales", profesor: "Pabón" }],
          2: [{ nombre: "Ciencias Naturales", profesor: "Pabón" }],
          3: [{ nombre: "Prácticas del Lenguaje", profesor: "Laborde" }],
          4: [{ nombre: "Prácticas del Lenguaje", profesor: "Laborde" }],
          5: [{ nombre: "Almuerzo" }],
          6: [{ nombre: "Ciencias Sociales", profesor: "Barakián" }],
          7: [{ nombre: "Ciencias Sociales", profesor: "Barakián" }],
          8: [
            { nombre: "Procedimientos Técnicos", profesor: "Lezcano", grupo: 1 },
            { nombre: "Sistemas Tecnológicos", profesor: "Cantero", grupo: 2 },
          ],
          9: [
            { nombre: "Procedimientos Técnicos", profesor: "Lezcano", grupo: 1 },
            { nombre: "Sistemas Tecnológicos", profesor: "Cantero", grupo: 2 },
          ]
        },
        jueves: {
          1: [{ nombre: "Ciencias Sociales", profesor: "Barakián" }],
          2: [{ nombre: "Ciencias Sociales", profesor: "Barakián" }],
          3: [{ nombre: "Prácticas del Lenguaje", profesor: "Laborde" }],
          4: [{ nombre: "Prácticas del Lenguaje", profesor: "Laborde" }],
          7: [
            { nombre: "Educación Física", profesor: "Dodorico", grupo: "Mujeres" },
            { nombre: "Educación Física", profesor: "Cayetano", grupo: "Hombres" }
          ]
        },
        viernes: {
          1: [{ nombre: "Ciencias Naturales", profesor: "Pabón" }],
          2: [{ nombre: "Ciencias Naturales", profesor: "Pabón" }],
          3: [{ nombre: "Matemática", profesor: "Guerrero" }],
          4: [{ nombre: "Matemática", profesor: "Guerrero" }],
          5: [{ nombre: "Almuerzo" }],
          6: [{ nombre: "Construcción de la Ciudadanía", profesor: "Páramo" }],
          7: [{ nombre: "Construcción de la Ciudadanía", profesor: "Páramo" }],
          8: [
            { nombre: "Sistemas Tecnológicos", profesor: "Cantero", grupo: 1 },
            { nombre: "Lenguajes Tecnológicos", profesor: "Carballo", grupo: 2 }
          ],
          9: [
            { nombre: "Sistemas Tecnológicos", profesor: "Cantero", grupo: 1 },
            { nombre: "Lenguajes Tecnológicos", profesor: "Carballo", grupo: 2 }
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
