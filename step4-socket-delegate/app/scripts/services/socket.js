'use strict';

angularSockets.service('socket', ['$rootScope', function($rootScope) {

  var socket = io.connect('http://localhost:1234');

  return {

    on: function(eventName, callback) {
      
      socket.on(eventName, function(data) {
        $rootScope.$apply(function() {
          callback(data);
        });
      });

    }
  };

}]);
