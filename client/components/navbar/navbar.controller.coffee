'use strict'

angular.module 'horariosApp'
.controller 'NavbarCtrl', ($scope, $location) ->
  $scope.menu = [
    title: 'Home'
    link: '/'
  ,
    title: "Cargar cursos"
    link: "/cursos"
  ]
  $scope.isCollapsed = true

  $scope.isActive = (route) ->
    route is $location.path()
