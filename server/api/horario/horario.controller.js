'use strict';

var _ = require('lodash');

var horarios = require('./horario.data');

var isProfesorLike = function (expected, horario) {
  return new RegExp("^" + _.deburr(expected) + "$", "i").test(_.deburr(horario.profesor));
};

var getHorarios = function (profesor, dia) {
  return _(horarios)
  .map(function(horario) {
    return {
      division: horario.division,
      horarios: _.pick(horario.horarios[dia], function (horariosDelDia) {
        return _.any(horariosDelDia, _.partial(isProfesorLike, profesor));
      })
    };
  })
  .reject(function(it) { return _.isEmpty(it.horarios); })
  .map(function(horario) {
    return _.mapValues(horario.horarios, function (it) {
      var hora = _.find(it, _.partial(isProfesorLike, profesor));

      return {
        nombre: hora.nombre,
        division: horario.division,
        grupo: hora.grupo
      };
    });
  })
  .flatten()
  .foldl(_.merge);
};

exports.index = function(req, res) {
  if (req.query.profesor == null) {
    return res.json(200, horarios);
  } else {
    var dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
    var horarioPorProfe = _.zipObject(dias, _.map(dias, _.partial(getHorarios, req.query.profesor)));

    return res.json(200, horarioPorProfe);
  }
};
