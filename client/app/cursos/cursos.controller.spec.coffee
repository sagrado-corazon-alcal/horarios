'use strict'

describe 'Controller: CursosCtrl', ->

  # load the controller's module
  beforeEach module 'horariosApp'
  CursosCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    CursosCtrl = $controller 'CursosCtrl',
      $scope: scope

  it 'should ...', ->
    expect(1).toEqual 1
