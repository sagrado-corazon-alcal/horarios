'use strict'

app.controller 'CursosCtrl', ($scope, $http) ->
  $scope.parseExcel = (xls) ->
    workbook = XLSX.read xls, type: "binary"
    data = _.map workbook.Sheets, XLSX.utils.sheet_to_json

    $scope.cursos = _.map data, (row, index) ->
      division: workbook.SheetNames[index]
      materias: _(row).map((it) -> profesor: it.Profesor, nombre: it.Materia).value()

    getUnique = (field) -> _($scope.cursos).map("materias").flatten().map(field).uniq().compact().sort().value()

    $scope.$watch "cursos", ->
      $scope.materias = getUnique "nombre"
      $scope.profesores = getUnique "profesor"
    , true

  $scope.eliminarMateria = (curso, materia) ->
    _.remove curso.materias, materia

  $scope.agregarMateria = (curso) ->
    curso.materias.push profesor: "", nombre: ""

  $scope.submit = ->
    $http.post '/api/cursos', $scope.cursos
