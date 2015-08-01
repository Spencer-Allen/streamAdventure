var through = require('through2');
var stream = through(write,end);

function write (buffer, encoding, next){
	var upperCase = buffer.toString().toUpperCase();
	
	this.push(upperCase);
	next();
};

function end (done){
	done();
};

process.stdin.pipe(stream).pipe(process.stdout);