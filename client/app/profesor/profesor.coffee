'use strict'

angular.module 'horariosApp'
.config ($stateProvider) ->
  $stateProvider
    .state 'profesor',
      url: '/docente'
      templateUrl: 'app/profesor/profesor.html'
      controller: 'ProfesorCtrl'
      resolve:
        profesores: ($http) -> $http.get("/api/profesores").then((response) -> response.data)

    .state 'profesor.ver',
      url: '/:nombre'
      templateUrl: 'app/profesor/profesor-ver.html'
      controller: 'ProfesorVerCtrl'
      resolve:
        profesorIngresado: ($stateParams) -> $stateParams.nombre
        horarios: ($http, $stateParams) -> $http.get("/api/horarios?profesor=#{$stateParams.nombre}").then((response) -> response.data)
