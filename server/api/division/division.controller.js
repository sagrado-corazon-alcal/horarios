'use strict';

var _ = require('lodash');
var Division = require('./division.model');

// Get list of divisions
exports.index = function(req, res) {
  Division.find(function (err, divisions) {
    if(err) { return handleError(res, err); }
    return res.json(200, divisions);
  });
};

// Creates a new division in the DB.
exports.create = function(req, res) {
  Division.removeAsync()
  .then(function() {
    req.body.forEach(function (it) {
      Division.create(it, function(err, curso) {
        if(err) { return handleError(res, err); }
        return res.json(201, curso);
      });
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
