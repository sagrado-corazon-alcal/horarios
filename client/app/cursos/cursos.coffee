'use strict'

angular.module 'horariosApp'
.config ($routeProvider) ->
  $routeProvider

  .when '/cursos/cargar',
    templateUrl: 'app/cursos/cursos-cargar.html'
    controller: 'CursosCargarCtrl'

  .when '/cursos',
    templateUrl: 'app/cursos/cursos-ver.html'
    controller: 'CursosVerCtrl'
