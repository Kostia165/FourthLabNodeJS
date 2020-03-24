var server1 = require('./api/index.js');
var server2 = require('./proxy/index.js');

server1.app.listen(3000, function(){
    console.log("Listening port 3000");
});

server2.app.listen(3001, function(){
    console.log("Listening port 3001");
});