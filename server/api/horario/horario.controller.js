'use strict';

var _ = require('lodash');

var horarios = require('./horario.data');

var getHorarios = function (profesor, dia) {
  return _(horarios)
  .map(function(horario) {
    return {
      division: horario.division,
      horarios: _.pick(horario.horarios[dia], function (horariosDelDia) {
        return _.any(horariosDelDia, { profesor: profesor });
      })
    };
  })
  .reject(function(it) { return _.isEmpty(it.horarios); })
  .map(function(horario) {
    return _.mapValues(horario.horarios, function (it) {
      return {
        nombre: it[0].nombre,
        division: horario.division
      };
    });
  })
  .flatten()
  .foldl(_.merge);

  //TODO: no funca bien con los grupos
};

exports.index = function(req, res) {
  if (req.query.profesor == null)
    return res.json(200, horarios);
  else {
    var dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
    var horarioPorProfe = _.zipObject(dias, _.map(dias, _.partial(getHorarios, req.query.profesor)));

    return res.json(200, horarioPorProfe);
  }
};
