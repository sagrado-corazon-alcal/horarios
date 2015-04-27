'use strict'

angular.module 'horariosApp'
.controller 'ProfesorCtrl', ($scope, profesores) ->
  $scope.profesores = profesores;
