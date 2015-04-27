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

  it('cuando se le pasa un profesor solo devuelve los horarios de ese', function(done) {
    request(app)
      .get('/api/horarios?profesor=Páramo')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.eql({
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
        });
        done();
      });
  });
});
