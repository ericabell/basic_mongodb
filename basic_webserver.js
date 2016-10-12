http = require('http');

var server = http.createServer(function(req,res) {
    res.end('It works! ' + req.url);
})

server.listen(8080, function(){
    console.log("Server listening on 8080.");
})