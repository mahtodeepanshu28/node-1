const http = require('http');

const Server =http.createServer(function(req, res) {
    res.write("Hello ")
    
    res.write(JSON.stringify({Name:"Deepanshu"}))

    res.end("<h1> Close </h1>")
});
Server.listen(4000)
