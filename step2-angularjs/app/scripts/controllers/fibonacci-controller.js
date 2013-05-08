'user strict';

angularSockets.controller('FibonacciController', ['$scope',
                                                  function($scope) {

  var socket = io.connect('http://localhost:1234');

  $scope.numbers = [];

  socket.on('fibonacci', function (data) {
    console.log('Fibonacci number received:', data);
    $scope.numbers.push(data);
  });

}]);
