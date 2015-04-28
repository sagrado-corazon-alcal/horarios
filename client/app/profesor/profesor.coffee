'use strict'

angular.module 'horariosApp'
.config ($stateProvider) ->
  $stateProvider
    .state 'profesor',
      url: '/profesor'
      templateUrl: 'app/profesor/profesor.html'
      abstract: true

    .state 'profesor.buscar',
      url: ''
      templateUrl: 'app/profesor/profesor-buscar.html'
      controller: 'ProfesorCtrl'
      resolve:
        profesores: ($http) -> $http.get("/api/profesores").then((response) -> response.data)

    .state 'profesor.ver',
      url: '/:nombre'
      templateUrl: 'app/profesor/profesor-ver.html'
      controller: 'ProfesorVerCtrl'
      resolve:
        profesor: ($stateParams) -> $stateParams.nombre
        horarios: ($http, $stateParams) -> $http.get("/api/horarios?profesor=#{$stateParams.nombre}").then((response) -> response.data)
