var net=require("net");

function zeroFilling(n) {return n < 10 ? '0' + n : n}

var server=net.createServer(function(socket){
		var date=new Date();
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var day=date.getDate();
		var hour=date.getHours();
		var minutes=date.getMinutes();
		var complete=zeroFilling(year)+"-"+zeroFilling(month)+"-"+zeroFilling(day)+" " + zeroFilling(hour)+":"+zeroFilling(minutes)+"\n";
		socket.end(complete);

	});
server.listen(process.argv[2]);
