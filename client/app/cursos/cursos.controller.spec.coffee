'use strict'

describe 'Controller: CursosCtrl', ->

  # load the controller's module
  beforeEach module 'horariosApp'

  CursosCtrl = undefined
  scope = undefined
  $httpBackend = undefined

  # Initialize the controller and a mock scope
  beforeEach inject (_$httpBackend_, $controller, $rootScope) ->
    $httpBackend = _$httpBackend_
    scope = $rootScope.$new()
    CursosCtrl = $controller 'CursosCtrl', $scope: scope

  it 'should unir los profesores de las materias iguales', ->
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

    scope.submit()

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
