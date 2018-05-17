(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Emiton = factory());
}(this, (function () { 'use strict';

  /*!
   * emiton
   * https://github.com/PengJiyuan/emiton
   *
   * Copyright (c) 2018 PengJiyuan
   * Licensed under the MIT license.
   */

  var Emiton = function Emiton() {
    this.list = {};
  };

  Emiton.prototype.has = function has (key) {
    return ~Object.keys(this.list).indexOf(key);
  };

  Emiton.prototype.isArray = function isArray (array) {
    return Object.prototype.toString.call(array) === '[object Array]';
  };

  Emiton.prototype.emit = function emit (name) {
      var data = [], len = arguments.length - 1;
      while ( len-- > 0 ) data[ len ] = arguments[ len + 1 ];

    if(!this.has(name)) {
      this.list[name] = [].concat( data );
    }
  };

  Emiton.prototype.on = function on (name, callback) {
    this.has(name) && callback.apply(void 0, this.list[name]);
  };

  Emiton.prototype.once = function once (name, callback) {
    this.has(name) && callback.apply(void 0, this.list[name]);
    this.has(name) && delete this.list[name];
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
