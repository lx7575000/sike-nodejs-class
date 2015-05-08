 function Class (obj) {
  if(obj.hasOwnProperty('initialize')){
    Class = obj['initialize'];
  }else{
    Class = function (){};
  }
  for (var item in obj){
    if(item != 'initialize'){
      Class.prototype[item] = obj[item];
    }
  }
  return Class;
};

module.exports = Class;