module.functs = functs;

function functs(...f){
	function functs(...args){
		return functs.run(args);
	}
	functs._f = [];
	functs.add = add.bind(functs);
	functs.remove = remove.bind(functs);
	functs.run = run.bind(functs);
	return functs;
}
function add(...f) {
	if(Array.isArray(f[0])) {
		f = f[0];
	}
	this._f.push.apply(this._f, f);
	return f;
}
function remove(...key) {
	const self = this;
	
	if(Array.isArray(key[0])) {
		key = key[0];
	}
	this.key.forEach(k=>{
		self._f = self._f.filter(f=>{
			return f !== k;
		});
	});
}
function run(args) {
	var end = -1;
	const r = this._f.map((f,i)=>{
		if(end === -1){
			return f.apply(f, args.concat(abort));
		}
		function abort(){
			end = i;
		}
	});
	if(end === -1) {
		return r;
	}
	return r.slice(0, end);
}
