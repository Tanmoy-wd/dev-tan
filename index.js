const http = require('http')
var fs = require('fs');

fs.appendFile('demofile1.html', '<h1>Tanmoy Content</h1>', function(err){
    if(err) throw err;
    console.log('Content appended!');
})
http.createServer(function(req, res) {
    fs.readFile('demofile1.html', function(err, data){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
    });
}).listen(8080);