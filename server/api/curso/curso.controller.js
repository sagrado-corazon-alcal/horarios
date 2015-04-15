'use strict';

var _ = require('lodash');
var Curso = require('./curso.model');

// Creates a new curso in the DB.
exports.create = function(req, res) {
  req.body.forEach(function (it) {
    Curso.create(it, function(err, curso) {
      if(err) { return handleError(res, err); }
      return res.json(201, curso);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
