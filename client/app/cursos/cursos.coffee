'use strict'

angular.module 'horariosApp'
.config ($routeProvider) ->
  $routeProvider.when '/cursos',
    templateUrl: 'app/cursos/cursos.html'
    controller: 'CursosCtrl'
