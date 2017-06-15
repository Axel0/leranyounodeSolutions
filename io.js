var fs=require('fs');

var file=fs.readFileSync(process.argv[2]);
var contentFile=file.toString();

console.log(contentFile.split('\n').length-1);


