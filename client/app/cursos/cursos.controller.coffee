'use strict'

app.controller 'CursosCtrl', ($scope) ->
  $scope.message = 'Hello'

  $scope.parseExcel = (xls) ->
    workbook = XLSX.read xls, type: "binary"
    data = _.map workbook.Sheets, XLSX.utils.sheet_to_json

    $scope.cursos = _.map data, (row, index) ->
      division: workbook.SheetNames[index]
      materias: _(row).map((it) -> profesor: it.Profesor, nombre: it.Materia).value()
