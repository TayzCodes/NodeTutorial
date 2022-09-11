var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var html = fs.readFileSync(__dirname+'/index.html','utf8');
    html = html.replace('{Message}','Hello World!!');
    res.end(html);
}).listen(1337, '127.0.0.1');

//known_hosts
// localhost 127.0.0.1 IPv4 0 - 255 
// www.xyz.com 135.60.123.112