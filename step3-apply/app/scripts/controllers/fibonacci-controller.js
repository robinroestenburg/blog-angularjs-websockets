'user strict';

angularSockets.controller('FibonacciController', ['$scope',
                                                  function($scope) {

  $scope.numbers = [];

  var processFibonacci = function(data) {
    $scope.$apply(function() {
      $scope.numbers.push(data);
    });
  };

  var socket = io.connect('http://localhost:1234');
  socket.on('fibonacci', processFibonacci);

}]);
