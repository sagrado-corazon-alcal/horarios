'use strict'

angular.module 'horariosApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'cursos',
    url: '/cursos'
    abstract: 'true'
    templateUrl: 'app/cursos/cursos.html'

  .state 'cursos.ver',
    url: ''
    templateUrl: 'app/cursos/cursos-ver.html'
    controller: 'CursosVerCtrl'

  .state 'cursos.cargar',
    url: '/cargar'
    abstract: true
    templateUrl: 'app/cursos/cursos-cargar.html'
    controller: 'CursosCargarCtrl'

  .state 'cursos.cargar.excel',
    url: ''
    templateUrl: 'app/cursos/cursos-cargar-excel.html'

  .state 'cursos.cargar.edicion',
    url: '/edicion'
    templateUrl: 'app/cursos/cursos-cargar-edicion.html'

  .state 'cursos.cargar.resumen',
    url: '/resumen'
    templateUrl: 'app/cursos/cursos-cargar-resumen.html'
