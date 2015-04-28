'use strict'

angular.module 'horariosApp'
.controller 'NavbarCtrl', ($scope, $location) ->
  menu = [
    title: 'Home'
    link: '/'
  ,
    title: "Por docente"
    link: "/docente"
  ]

  $scope.simpleEntries = _.reject(menu, "childs")
  $scope.compoundEntries = _.filter(menu, "childs")

  $scope.isCollapsed = true

  $scope.isActive = (route) ->
    route is $location.path()
