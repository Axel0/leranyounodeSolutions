var http=require('http');

var urls=process.argv[2];

var results=[];
var current="";




for (var i=0; i<urls.length; i++){
results[i]=null;


	http.get(urls[i], function(response){
		var current="";
		response.on('data', function(data){
			current+=data.toString();		
		});
		response.on('end', function(){
			var count=0;
			results[i]=current;
			for (var i=0; i<results.length; i++){
				if (results[i]!==null){
				 	count++;
				}
			}
			if (results.length===count){
				for (var i=0; i<results.length; i++){
					console.log(results[i]);
				}
			}
		});
	
	})
	
	
}

