/*!
 * emitry
 * https://github.com/PengJiyuan/emitry
 *
 * Copyright (c) 2018 PengJiyuan
 * Licensed under the MIT license.
 */

var Emitry = function Emitry() {
  this.list = Object.create(null);
};

Emitry.prototype.has = function has (key) {
  return ~Object.keys(this.list).indexOf(key);
};

Emitry.prototype.isArray = function isArray (array) {
  return Object.prototype.toString.call(array) === '[object Array]';
};

Emitry.prototype.emit = function emit (name) {
    var this$1 = this;
    var data = [], len = arguments.length - 1;
    while ( len-- > 0 ) data[ len ] = arguments[ len + 1 ];

  if (this.list[name]) {
    for (var i = 0; i < this.list[name].length; i++) {
      var e = this$1.list[name][i];
      e.callback.apply(e, data);
      if(e.once) {
        this$1.list[name].splice(i--, 1);
      }
    }
    if(this.list[name] && this.list[name].length === 0) {
      delete this.list[name];
    }
  }
};

Emitry.prototype.on = function on (name, callback) {
  if(!this.has(name)) {
    this.list[name] = [];
  }
  this.list[name].push({
    callback: callback
  });
};

Emitry.prototype.once = function once (name, callback) {
  if(!this.has(name)) {
    this.list[name] = [];
  }
  this.list[name].push({
    once: true,
    callback: callback
  });
};

Emitry.prototype.off = function off (names, callback) {
    var this$1 = this;

  if(this.isArray(names)) {
    names.forEach(function (name) { return delete this$1.list[name]; });
  } else if(typeof names === 'string' && typeof callback === 'function') {
    if (this.has(names)) {
      var removedOne = this.list[names].findIndex(function (item) { return item.callback === callback; });
      ~removedOne && this.list[names].splice(removedOne, 1);
    }
  } else {
    this.list = Object.create(null);
  }
};

export default Emitry;
