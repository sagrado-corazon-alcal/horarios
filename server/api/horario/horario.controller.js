'use strict';

var _ = require('lodash');

var horarios = require('./horario.data');
var profesores = require('../profesor/profesor.data');

var equalsIgnoreCaseAndAccent = function (one, another) {
  return new RegExp("^" + _.deburr(one) + "$", "i").test(_.deburr(another));
}

var isProfesorLike = function (expected, horario) {
  return equalsIgnoreCaseAndAccent(expected, horario.profesor);
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
  var profesor = req.query.profesor;

  if (profesor == null) {
    return res.json(200, horarios);
  } else {
    var dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
    var horarioPorProfe = _.zipObject(dias, _.map(dias, _.partial(getHorarios, profesor)));

    return res.json(200, {
      profesor: _.find(profesores, _.partial(equalsIgnoreCaseAndAccent, profesor)),
      horarios: horarioPorProfe
    });
  }
};
