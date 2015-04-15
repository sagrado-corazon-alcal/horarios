'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

var Division = require('./division.model');

describe('Divisiones', function() {

  it('should borrar las actuales antes de crear las nuevas', function(done) {
    Division
      .createAsync({
        division: "1B",
        materias: []
      })
      .then(function () {
          request(app)
          .post('/api/divisiones')
          .send([{division: "2B", materias: []}])
          .expect(201)
          .end(function(err, res) {
            Division.findAsync().then(function (result) {
              result.length.should.equal(1);
              done();
            });
          });
      });
  });
});
