'user strict';

angularSockets.controller('FibonacciController', ['$scope', 'socket',
                                                  function($scope, socket) {

  $scope.numbers = [];

  socket.on('fibonacci', function(data) {
    $scope.numbers.push(data);
  });

}]);
