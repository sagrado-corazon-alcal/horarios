'use strict'

angular.module 'horariosApp'
.controller 'NavbarCtrl', ($scope, $location) ->
  menu = [
    title: 'Home'
    link: '/'
  ,
    title: "Cursos"
    link: "/cursos"
    childs: [
      title: "Cargar"
      link: "/cargar"
    ]
  ]

  $scope.simpleEntries = _.reject(menu, "childs")
  $scope.compoundEntries = _.filter(menu, "childs")

  $scope.isCollapsed = true

  $scope.isActive = (route) ->
    route is $location.path()
