var http=require("http");
var Collected='';
http.get(process.argv[2],function(response){
	response.on('data', function(data){
		Collected+=data.toString();
	});
	response.on('end', function(data){
		var characters=Collected.split("");
		console.log(characters.length);
		console.log(Collected);	
	});
});
