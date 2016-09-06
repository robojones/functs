module.exports = functs;

/**
 * merge multiple functions into one
 * @param {...function} [f] - functions to merge
 * @returns {function}
 */

function functs(...f) {
    /**
     * execute all included functions
     * @param {...*} [args] - arguments passed to all included functions
     * @returns {*[]}
     */
    function functs(...args) {
        return functs.run(this, args);
    }
    functs._f = f.filter((f) => {
        return typeof f === 'function';
    });
    functs.add = add.bind(functs);
    functs.remove = remove.bind(functs);
    functs.run = run.bind(functs);
    return functs;
}

/**
 * add functions to the functs-object
 * @param {...function|function[]} f - functions to be added
 * @returns {function[]}
 */

function add(...f) {
    if(Array.isArray(f[0])) {
        f = f[0];
    }
    f = f.filter((f) => {
        return typeof f === 'function';
    });
    this._f.push.apply(this._f, f);
    return f;
}

/**
 * remove functions from the functs-object
 * @param {...function|function[]} f - functions to be removed
 */

function remove(...key) {
    const self = this;
	
	if(!key.length) {
		this._f = [];
		return;
	}
    if(Array.isArray(key[0])) {
        key = key[0];
    }
    this.key.forEach(k => {
        self._f = self._f.filter(f => {
            return f !== k;
        });
    });
}

/**
 * execute all included functions
 * @param {*} thisArg - thisArg to be applied on all included functions
 * @param {*[]} args - array of arguments passed to all included functions
 */

function run(thisArg, args) {
    var end = -1;
    const r = this._f.map((f, i) => {
        if(end === -1) {
            return f.apply(thisArg, args.concat(abort));
        }

        function abort() {
            end = i;
        }
    });
    if(end === -1) {
        return r;
    }
    return r.slice(0, end);
}
