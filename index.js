/*!
 * emitry
 * https://github.com/PengJiyuan/emitry
 *
 * Copyright (c) 2018 PengJiyuan
 * Licensed under the MIT license.
 */

class Emitry {

  constructor() {
    this.list = {};
  }

  has(key) {
    return ~Object.keys(this.list).indexOf(key);
  }

  isArray(array) {
    return Object.prototype.toString.call(array) === '[object Array]';
  }

  emit(name, ...data) {
    if(!this.has(name)) {
      this.list[name] = [...data];
    }
  }

  on(name, callback) {
    this.has(name) && callback(...this.list[name]);
  }

  once(name, callback) {
    this.has(name) && callback(...this.list[name]);
    this.has(name) && delete this.list[name];
  }

  off(names) {
    if(this.isArray(names)) {
      names.forEach(name => delete this.list[name]);
    } else {
      this.list = {};
    }
  }

}

export default Emitry;
