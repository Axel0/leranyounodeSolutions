var fs=require("fs");
var http=require('http')
var server=http.createServer(function(req, res){
	var loc=process.argv[3];
	fs.createReadStream(loc).pipe(res);
});

server.listen(process.argv[2]);
