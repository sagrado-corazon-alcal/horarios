'use strict'

angular.module 'horariosApp'
.config ($stateProvider) ->
  $stateProvider.state 'profesor',
    url: '/profesor'
    templateUrl: 'app/profesor/profesor.html'
    controller: 'ProfesorCtrl'
    resolve:
      profesores: ($http) -> $http.get("/api/profesores").then((response) -> response.data)
