'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

var profesores = require('./profesor.data');

describe('profesor.data', function() {

  it('should devolver los profes', function() {
    profesores.sort().should.eql(["Grillo", "Alvarenga", "Páramo", "Cruz", "Leonik", "Amigo", "Dodorico", "Laborde", "Barakián", "Guerrero", "Cayetano", "Moro",
      "Carballo", "Lezcano", "Pabón", "Cantero", "Llovet", "Ughetti", "Calviello", "Taliercio", "Bonifacini", "Gubitosi", "Ferrero", "Sierra Bueno", "Báez", "Herrera",
      "Rodríguez", "Crippa", "Rubio", "Albella", "Rojas", "González", "Batlle", "Aloi", "Morales L", "Vargas", "Romero", "Fernández", "Altamiranda", "Gómez",
      "Villalba", "Morales S", "Alfaro", "Flores", "Olmedo", "SIN PROFE"].sort());
  });
});
