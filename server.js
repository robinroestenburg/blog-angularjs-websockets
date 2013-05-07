var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
    io     = require('socket.io').listen(server);

server.listen(1234);

app.configure(function() {
  app.use(express.static(__dirname + '/app'));
});

io.set('log level', 1);
io.sockets.on('connection', function (socket) {

  socket.emit('fibonacci', 0);
  socket.emit('fibonacci', 1);

  function emitFibonacciNumber(n_minus_1, n_minus_2) {
    setTimeout(function calculateFibonnaci() {
      n = n_minus_1 + n_minus_2;

      socket.emit('fibonacci', n);

      n_minus_1 = n_minus_2;
      n_minus_2 = n;

      emitFibonacciNumber(n_minus_1, n_minus_2);
    }, 1000);
  };
  emitFibonacciNumber(0, 1);

});
