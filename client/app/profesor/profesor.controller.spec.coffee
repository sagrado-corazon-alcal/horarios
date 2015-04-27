'use strict'

describe 'Controller: ProfesorCtrl', ->

  # load the controller's module
  beforeEach module 'horariosApp'
  ProfesorCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    ProfesorCtrl = $controller 'ProfesorCtrl',
      $scope: scope

  it 'should ...', ->
    expect(1).toEqual 1
