'use strict'

app.controller 'MainCtrl', ($scope, horarios) ->
  hora = (hora, minutos) ->
    fecha = new Date
    fecha.setHours hora
    fecha.setMinutes minutos
    fecha

  horasSegunBloque =
    1:
      inicio: hora(7, 30)
      fin: hora(8, 30)
    2:
      inicio: hora(8, 40)
      fin: hora(9, 40)
    3:
      inicio: hora(9, 50)
      fin: hora(10, 50)
    4:
      inicio: hora(11, 0)
      fin: hora(12, 0)
    5:
      inicio: hora(12, 0)
      fin: hora(13, 0)
    6:
      inicio: hora(13, 0)
      fin: hora(14, 0)
    7:
      inicio: hora(14, 10)
      fin: hora(15, 10)
    8:
      inicio: hora(15, 20)
      fin: hora(16, 20)
    9:
      inicio: hora(16, 30)
      fin: hora(17, 30)

  $scope.dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
  $scope.bloques = [1..8]
  $scope.horarios = horarios

  $scope.materiaPara = (horario, dia, bloque) ->
    materiasDelDia = horario.horarios[_.deburr dia.toLowerCase()]
    if materiasDelDia? then materiasDelDia[bloque] else ""
