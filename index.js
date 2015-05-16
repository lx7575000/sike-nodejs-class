 function Class (obj, parent) {
  var child = obj['initialize'] || function(){};

  for (var item in obj){
    if(item != 'initialize'){
      child[item] = obj[item];
    }
  }

  return child;
};

var A = Class({
    a: function() {
      return 1;
    }
  });

  var B = Class({
    b: function() {
      return 2;
    }
  },A);

  var b = new B();

  console.log(b.constructor === B); //b.constructor 构造函数就是 B

module.exports = Class;

