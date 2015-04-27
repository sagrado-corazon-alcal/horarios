'use strict';

var _ = require('lodash');
var horarios = require('../horario/horario.data');

module.exports = _(horarios).map("horarios").map(_.values).flatten().map(_.values).flattenDeep().map("profesor").uniq().compact().value();
