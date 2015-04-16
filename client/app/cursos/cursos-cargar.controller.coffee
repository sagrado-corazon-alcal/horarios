'use strict'

app.controller 'CursosCargarCtrl', ($scope, $state, $http) ->
  getUnique = (field) -> _($scope.cursos).map("materias").flatten().map(field).uniq().compact().sort().value()

  $scope.parseExcel = (xls) ->
    workbook = XLSX.read xls, type: "binary"
    data = _.map workbook.Sheets, XLSX.utils.sheet_to_json

    $scope.cursos = _.map data, (row, index) ->
      division: workbook.SheetNames[index]
      materias: _(row).map((it) -> profesor: it.Profesor, nombre: it.Materia).value()

    $scope.$watch "cursos", ->
      $scope.materias = getUnique "nombre"
      $scope.profesores = getUnique "profesor"
    , true

    $state.go "^.edicion"

  $scope.eliminarMateria = (curso, materia) ->
    _.remove curso.materias, materia

  $scope.agregarMateria = (curso) ->
    curso.materias.push profesor: "", nombre: ""

  $scope.totalDeProfesores = -> getUnique("profesor").length

  $scope.cantidadMateriasPorAnio = ->
    _.map $scope.cursos, (it) ->
      division: it.division
      cantidad: _(it.materias).map("nombre").uniq().value().length

  $scope.submit = ->
    $http.post '/api/divisiones', _.map $scope.cursos, (it) ->
      division: it.division
      materias:
        _(it.materias)
          .groupBy "nombre"
          .map (materias, nombre) ->
            nombre: nombre
            profesores: _(materias).map("profesor").flatten().value()
          .value()

    .success ->
      $state.go "cursos.ver"
