'use strict';

var horarios = require('./horario.data');

exports.index = function(req, res) {
  return res.json(200, horarios);
};
