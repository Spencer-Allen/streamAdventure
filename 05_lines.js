var through = require('through2');
var stream = through(write,end);
var split = require('split');

var inc = 0

function write(buffer, encoding, next){
	var upperCaseOut = buffer.toString().toUpperCase();
	var lowerCaseOut = buffer.toString().toLowerCase();
	
	if (inc == 0 || inc % 2 == 0){
		this.push(lowerCaseOut + '\n');
	}
	else{
		this.push(upperCaseOut + '\n');
	}
	inc ++;
	
	next();
};

function end(done){
	done()
};

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
