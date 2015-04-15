'use strict'

app.controller 'CursosVerCtrl', ($scope, $http) ->
  $http
  .get '/api/divisiones'
  .success (divisiones) ->
    $scope.cursos = divisiones
