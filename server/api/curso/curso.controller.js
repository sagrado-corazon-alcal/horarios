'use strict';

var _ = require('lodash');
var Curso = require('./curso.model');

var Promise = require('bluebird');

// Creates a new curso in the DB.
exports.create = function(req, res) {
  var promises = req.body.map(function (it) { return Curso.createAsync(it); });

  Promise.all(promises)
    .then(function (result) {
      res.json(201, result);
    })
    .catch(_.partial(handleError, res));
};

function handleError(res, err) {
  return res.send(500, err);
}
