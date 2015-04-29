'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/horarios', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/horarios')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });

  describe('cuando se le pasa un profesor solo devuelve los horarios de ese', function() {
    var assert = null;

    before(function () {
      assert = function (done, profesor, assertion) {
        request(app)
          .get('/api/horarios?profesor=' + profesor)
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function(err, res) {
            if (err) return done(err);

            assertion(res);
            done();
          });
      };
    });

    it('para materias sin grupos', function (done) {
      assert(done, "Páramo", function (res) {
        res.body.should.eql({
          profesor: "Páramo",
          horarios: {
            lunes: {
              5: { nombre: "Ciencias Sociales", division: "1°A" }
            },
            martes: {
              5: { nombre: "Ciencias Sociales", division: "1°A" },
              6: { nombre: "Construcción de la Ciudadanía", division: "2°B" },
              7: { nombre: "Construcción de la Ciudadanía", division: "2°B" },
              8: { nombre: "Historia", division: "3°B" },
              9: { nombre: "Historia", division: "3°B" }
            },
            miercoles: {
              5: { nombre: "Ciencias Sociales", division: "1°A" }
            },
            viernes: {
              5: { nombre: "Ciencias Sociales", division: "1°A" },
              6: { nombre: "Construcción de la Ciudadanía", division: "1°B" },
              7: { nombre: "Construcción de la Ciudadanía", division: "1°B" }
            }
          }
        });
      });
    })

    it('de manera case insensitive', function (done) {
      assert(done, "páramo", function (res) {
        res.body.should.eql({
          profesor: "Páramo",
          horarios: {
            lunes: {
              5: { nombre: "Ciencias Sociales", division: "1°A" }
            },
            martes: {
              5: { nombre: "Ciencias Sociales", division: "1°A" },
              6: { nombre: "Construcción de la Ciudadanía", division: "2°B" },
              7: { nombre: "Construcción de la Ciudadanía", division: "2°B" },
              8: { nombre: "Historia", division: "3°B" },
              9: { nombre: "Historia", division: "3°B" }
            },
            miercoles: {
              5: { nombre: "Ciencias Sociales", division: "1°A" }
            },
            viernes: {
              5: { nombre: "Ciencias Sociales", division: "1°A" },
              6: { nombre: "Construcción de la Ciudadanía", division: "1°B" },
              7: { nombre: "Construcción de la Ciudadanía", division: "1°B" }
            }
          }
        });
      });
    })

    it('ignorando tildes', function (done) {
      assert(done, "Paramo", function (res) {
        res.body.should.eql({
          profesor: "Páramo",
            horarios: {
            lunes: {
              5: { nombre: "Ciencias Sociales", division: "1°A" }
            },
            martes: {
              5: { nombre: "Ciencias Sociales", division: "1°A" },
              6: { nombre: "Construcción de la Ciudadanía", division: "2°B" },
              7: { nombre: "Construcción de la Ciudadanía", division: "2°B" },
              8: { nombre: "Historia", division: "3°B" },
              9: { nombre: "Historia", division: "3°B" }
            },
            miercoles: {
              5: { nombre: "Ciencias Sociales", division: "1°A" }
            },
            viernes: {
              5: { nombre: "Ciencias Sociales", division: "1°A" },
              6: { nombre: "Construcción de la Ciudadanía", division: "1°B" },
              7: { nombre: "Construcción de la Ciudadanía", division: "1°B" }
            }
          }
        });
      });
    })

    it('para materias con grupos', function (done) {
      assert(done, "Aloi", function (res) {
        res.body.should.eql({
          profesor: "Aloi",
          horarios: {
            lunes: {
                6: {
                    nombre: "Laboratorio de Programación II",
                    division: "5°B",
                    grupo: 1
                },
                7: {
                    nombre: "Laboratorio de Programación II",
                    division: "5°B",
                    grupo: 1
                },
                8: {
                    nombre: "Laboratorio de Programación II",
                    division: "5°B",
                    grupo: 2
                },
                9: {
                    nombre: "Laboratorio de Programación II",
                    division: "5°B",
                    grupo: 2
                }
            },
            martes: {
                6: {
                    nombre: "Laboratorio de Programación I",
                    division: "4°B",
                    grupo: 2
                },
                7: {
                    nombre: "Laboratorio de Programación I",
                    division: "4°B",
                    grupo: 2
                },
                8: {
                    nombre: "Laboratorio de Programación II",
                    division: "5°B",
                    grupo: 2
                },
                9: {
                    nombre: "Laboratorio de Programación II",
                    division: "5°B",
                    grupo: 2
                }
            },
            miercoles: {
                6: {
                    nombre: "Laboratorio de Programación I",
                    division: "4°B",
                    grupo: 1
                },
                7: {
                    nombre: "Laboratorio de Programación I",
                    division: "4°B",
                    grupo: 1
                }
            },
            viernes: {
                6: {
                    nombre: "Laboratorio de Programación II",
                    division: "5°B",
                    grupo: 1
                },
                7: {
                    nombre: "Laboratorio de Programación II",
                    division: "5°B",
                    grupo: 1
                }
            }
          }
        });
      });
    })
  });
});
