'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

var Curso = require('./curso.model');

describe('Un Curso', function() {
  it('should validar que el dia es correcto', function() {
    var curso = {
      division: "5B",
      nombre: "Laboratorio de Programacion 2",
      horarios: [{
        profesor: "Aloi",
        dia: "Cualquiera",
        inicio: new Date(),
        fin: new Date()
      }]
    };

    Curso.create(curso, function (err) {
      err.name.should.equal('ValidationError');
      err.errors.should.have.property('horarios.0.dia');
      err.errors['horarios.0.dia'].should.have.properties({
        path: 'dia',
        type: 'enum'
      });
    });
  });
});
