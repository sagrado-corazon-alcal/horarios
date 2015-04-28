app.directive 'autofocus', ($timeout) ->
  restrict: 'A'
  link: ($scope, $element) ->
    $timeout ->
      $element[0].focus()
