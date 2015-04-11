'use strict'

angular.module 'horariosApp'
.config ($stateProvider) ->
  $stateProvider

  .state 'cursos',
    url: '/cursos'
    templateUrl: 'app/cursos/cursos-ver.html'
    controller: 'CursosVerCtrl'

  .state 'cursos.cargar',
    url: '/cargar'
    templateUrl: 'app/cursos/cursos-cargar.html'
    controller: 'CursosCargarCtrl'
