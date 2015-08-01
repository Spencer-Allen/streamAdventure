var concat = require('concat-stream')

function reverseString(s) {
	return s.split("").reverse().join("")
	};


var inputStream = process.stdin;
var outputStream = process.stdout;

inputStream.pipe(concat(function(body){
	var reversed = reverseString(body.toString());
	console.log(reversed);
}));