'use strict'

app.controller 'CursosCtrl', ($scope) ->
  $scope.parseExcel = (xls) ->
    workbook = XLSX.read xls, type: "binary"
    data = _.map workbook.Sheets, XLSX.utils.sheet_to_json

    $scope.cursos = _.map data, (row, index) ->
      division: workbook.SheetNames[index]
      materias: _(row).map((it) -> profesor: it.Profesor, nombre: it.Materia).value()

    getUnique = (field) -> _(data).flatten().map(field).uniq().compact().sort().value()

    $scope.profesores = getUnique "Profesor"
    $scope.materias = getUnique "Materia"

  $scope.eliminarMateria = (curso, materia) ->
    _.remove curso.materias, materia

  $scope.agregarMateria = (curso) ->
    curso.materias.push profesor: "", nombre: ""
