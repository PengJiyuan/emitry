(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Emiton = factory());
}(this, (function () { 'use strict';

  var Emiton = function Emiton() {
    this.list = {};
  };

  Emiton.prototype.has = function has (key) {
    return ~Object.keys(this.list).indexOf(key);
  };

  Emiton.prototype.isArray = function isArray (array) {
    return Obejct.prototype.toString.call(array) === '[object Array]';
  };

  Emiton.prototype.emit = function emit (name, data) {
    if(!this.has(name)) {
      this.list[name] = data;
    }
  };

  Emiton.prototype.on = function on (name, callback) {
    this.has(name) && callback(this.list[name]);
  };

  Emiton.prototype.off = function off (names) {
      var this$1 = this;

    if(this.isArray(names)) {
      names.forEach(function (name) { return delete this$1.list[name]; });
    } else {
      this.list = {};
    }
  };

  return Emiton;

})));
