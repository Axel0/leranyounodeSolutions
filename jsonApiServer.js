const url=require("url");
const http=require("http");

var routes={
	"/api/parsetime":function(parsed){
		d=new Date(parsed.query.iso);
		return {
			hour: d.getHours(),
			minute: d.getMinutes(),
			second:d.getSeconds()	
		};
		
	},
	"/api/unixtime" : function(parsed){
			return{
			unixtime: (new Date(parsed.query.iso)).getTime()
			}
	}
}

var server=http.createServer(function(req, res){
	parsed=url.parse(req.url,true);
	resource=routes[parsed.pathname];
		if (resource){
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(JSON.stringify(resource(parsed)));
	
		}
		else{
			res.writeHead(404);
			res.end();
		}	 
});

server.listen(process.argv[2]);

