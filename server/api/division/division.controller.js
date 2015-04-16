'use strict';

var _ = require('lodash');
var Division = require('./division.model');

var Promise = require('bluebird');

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
      var promises = req.body.map(function (it) { return Division.createAsync(it); });

      Promise.all(promises)
        .then(function (result) {
          res.json(201, result);
        })
        .catch(_.partial(handleError, res));
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
