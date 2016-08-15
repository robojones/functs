const functs = require('./functs');

const a = functs(()=>{
	return 1;
});

a.add((err)=>{
	return 1;
});

a.add((err, abort)=>{
	if(err) {
		abort();
	}
	return 1;
});

a.add((err)=>{
	return 1;
});

const b = a();

if(b.length !== 2 || b[0] !== 1 || b[1] !== 1){
	throw new Error('not working');
}
