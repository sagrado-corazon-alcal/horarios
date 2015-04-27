'use strict';

var _ = require('lodash');
var Profesor = require('./profesor.model');
var profesores = require('./profesor.data');

// Get list of profesors
exports.index = function(req, res) {
  return res.json(profesores);
};

// Get a single profesor
exports.show = function(req, res) {
  Profesor.findById(req.params.id, function (err, profesor) {
    if(err) { return handleError(res, err); }
    if(!profesor) { return res.send(404); }
    return res.json(profesor);
  });
};

// Creates a new profesor in the DB.
exports.create = function(req, res) {
  Profesor.create(req.body, function(err, profesor) {
    if(err) { return handleError(res, err); }
    return res.json(201, profesor);
  });
};

// Updates an existing profesor in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Profesor.findById(req.params.id, function (err, profesor) {
    if (err) { return handleError(res, err); }
    if(!profesor) { return res.send(404); }
    var updated = _.merge(profesor, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, profesor);
    });
  });
};

// Deletes a profesor from the DB.
exports.destroy = function(req, res) {
  Profesor.findById(req.params.id, function (err, profesor) {
    if(err) { return handleError(res, err); }
    if(!profesor) { return res.send(404); }
    profesor.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
