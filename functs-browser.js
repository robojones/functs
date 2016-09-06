(function(){
	if(window) {
		window.functs = functs;
	}else if(module && module.exports){
		module.exports = functs;
	}
	
	function functs(){
		var f = Array.prototype.slice.call(arguments);
		function functs(){
			var args = Array.prototype.slice.call(arguments);
			return functs.run(this, args);
		}
		functs._f = f.filter(function(f){
			return typeof f === 'function';
		});
		functs.add = add.bind(functs);
		functs.remove = remove.bind(functs);
		functs.run = run.bind(functs);
		return functs;
	}
	function add() {
		var f = Array.prototype.slice.call(arguments);
		if(Array.isArray(f[0])) {
			f = f[0];
		}
		f = f.filter(function(f){
			return typeof f === 'function';
		});
		this._f.push.apply(this._f, f);
		return f;
	}
	function remove() {
		var key = Array.prototype.slice.call(arguments);
		var self = this;
	
		if(!key.length){
			this._f = [];
			return;
		}
		if(Array.isArray(key[0])) {
			key = key[0];
		}
		this.key.forEach(function(k){
			self._f = self._f.filter(function(f){
				return f !== k;
			});
		});
	}
	function run(thisArg, args) {
		var end = -1;
		var r = this._f.map(function(f,i){
			if(end === -1){
				return f.apply(thisArg, args.concat(abort));
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
})();
