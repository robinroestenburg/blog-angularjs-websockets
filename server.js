var app    = require('express')(),
    server = require('http').createServer(app),
    io     = require('socket.io').listen(server);

server.listen(1234);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {

  function emitFibonacciNumber() {
    setTimeout(function calculateFibonnaci(n_minus_1, n_minus_2) {
      n = n_minus_1 + n_minus_2;

      socket.emit('fibonacci', n);

      n_minus_1 = n_minus_2;
      n_minus_2 = n;

      emitFibonacciNumber(n_minus_1, n_minus_2);
    }, 1000);
  };
  emitFibonacciNumber(0, 1);

});
