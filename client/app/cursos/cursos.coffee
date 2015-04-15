'use strict'

angular.module 'horariosApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'cursos',
    url: '/cursos'
    templateUrl: 'app/cursos/cursos.html'

  .state 'cursos.ver',
    url: '/ver'
    templateUrl: 'app/cursos/cursos-ver.html'
    controller: 'CursosVerCtrl'

  .state 'cursos.cargar',
    url: '/cargar'
    templateUrl: 'app/cursos/cursos-cargar.html'
    controller: 'CursosCargarCtrl'

  .state 'cursos.cargar.excel',
    url: '/excel'
    templateUrl: 'app/cursos/cursos-cargar-excel.html'

  .state 'cursos.cargar.edicion',
    url: '/edicion'
    templateUrl: 'app/cursos/cursos-cargar-edicion.html'

  .state 'cursos.cargar.resumen',
    templateUrl: 'app/cursos/cursos-cargar-resumen.html'
