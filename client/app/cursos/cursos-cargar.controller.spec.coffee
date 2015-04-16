'use strict'

describe 'Controller: CursosCargarCtrl', ->

  # load the controller's module
  beforeEach module 'horariosApp'
  beforeEach module 'stateMock'

  CursosCargarCtrl = undefined
  scope = undefined
  $httpBackend = undefined
  $state = undefined

  # Initialize the controller and a mock scope
  beforeEach inject (_$httpBackend_, $controller, $rootScope, _$state_) ->
    $httpBackend = _$httpBackend_
    $state = _$state_
    scope = $rootScope.$new()
    CursosCargarCtrl = $controller 'CursosCargarCtrl', $scope: scope

  describe "al hacer submit", ->
    beforeEach ->
      scope.cursos = [
        division: "1B"
        materias: [
          nombre: "Sistemas Tecnológicos"
          profesor: "Lezcano"
        ,
          nombre: "Sistemas Tecnológicos"
          profesor: "Carballo"
        ,
          nombre: "Laboratorio de Programación 2"
          profesor: "Aloi"
        ]
      ]

      $state.expectTransitionTo "cursos.ver"

      scope.submit()

    it 'should unir los profesores de las materias iguales', ->
      $httpBackend
        .expectPOST '/api/divisiones', [
          division: "1B"
          materias: [
            nombre: "Sistemas Tecnológicos"
            profesores: ["Lezcano", "Carballo"]
          ,
            nombre: "Laboratorio de Programación 2"
            profesores: ["Aloi"]
          ]
        ]
        .respond 201

      $httpBackend.flush()
