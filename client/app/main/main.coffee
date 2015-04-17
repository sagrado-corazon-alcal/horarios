'use strict'

angular.module 'horariosApp'
.config ($stateProvider) ->
  $stateProvider
  .state 'main',
    url: '/'
    templateUrl: 'app/main/main.html'
    controller: 'MainCtrl'
    resolve:
      horarios: ($http) -> $http.get("/api/horarios").then((response) -> response.data)
