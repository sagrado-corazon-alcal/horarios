'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

var profesores = require('./profesor.data');

describe('profesor.data', function() {

  it('should devolver los profes', function() {
    profesores.should.eql(["Grillo", "Alvarenga", "Páramo", "Cruz", "Leonik", "Amigo", "Dodorico", "Laborde", "Barakián", "Guerrero", "Cayetano", "Moro",
      "Carballo", "Lezcano", "Pabón", "Cantero", "Jové", "Ughetti", "Calviello", "Taliercio", "Bonifacini", "Gubitosi", "Ferrero", "Grilla", "Báez",
      "Rodríguez", "Crippa", "Andrea", "Rubio", "Albella", "Rojas", "González", "Batlle", "Aloi", "Morales", "Vargas", "Romero", "Fernández", "Altamiranda", "Gómez",
      "Villalba", "Vagnoni", "Alfaro", "Flores", "Olmedo", "SIN PROFE"]);
  });
});
