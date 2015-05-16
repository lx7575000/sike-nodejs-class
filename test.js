module.exports = Class(child, parent){
	var _hasProp = {}.hasOwnProperty;

	for(var key in parent)
	{
		if(_hasProp.call(parent, key)){
			child[key] = parent[key];
		} 
	}

	function ctor(){
		this.constructor = child;
	}

	child.prototype = new ctor();
	child.prototype.constructor.prototype = parent.prototype;

	return child;
}