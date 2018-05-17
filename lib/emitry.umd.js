(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Emitry = factory());
}(this, (function () { 'use strict';

  /*!
   * emitry
   * https://github.com/PengJiyuan/emitry
   *
   * Copyright (c) 2018 PengJiyuan
   * Licensed under the MIT license.
   */

  var Emitry = function Emitry() {
    this.list = {};
  };

  Emitry.prototype.has = function has (key) {
    return ~Object.keys(this.list).indexOf(key);
  };

  Emitry.prototype.isArray = function isArray (array) {
    return Object.prototype.toString.call(array) === '[object Array]';
  };

  Emitry.prototype.emit = function emit (name) {
      var ref;

      var data = [], len = arguments.length - 1;
      while ( len-- > 0 ) data[ len ] = arguments[ len + 1 ];
    this.list[name] && (ref = this.list[name]).callback.apply(ref, data);
    this.list[name] && this.list[name].once && delete this.list[name];
  };

  Emitry.prototype.on = function on (name, callback) {
    if(!this.has(name)) {
      this.list[name] = {
        callback: callback
      };
    }};

  Emitry.prototype.once = function once (name, callback) {
    if(!this.has(name)) {
      this.list[name] = {
        once: true,
        callback: callback
      };
    }
  };

  Emitry.prototype.off = function off (names) {
      var this$1 = this;

    if(this.isArray(names)) {
      names.forEach(function (name) { return delete this$1.list[name]; });
    } else {
      this.list = {};
    }
  };

  return Emitry;

})));
