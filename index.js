/*!
 * emitry
 * https://github.com/PengJiyuan/emitry
 *
 * Copyright (c) 2018 PengJiyuan
 * Licensed under the MIT license.
 */

class Emitry {

  constructor() {
    this.list = Object.create(null);
  }

  has(key) {
    return ~Object.keys(this.list).indexOf(key);
  }

  isArray(array) {
    return Object.prototype.toString.call(array) === '[object Array]';
  }

  emit(name, ...data) {
    if (this.list[name]) {
      for (let i = 0; i < this.list[name].length; i++) {
        const e = this.list[name][i];
        e.callback(...data);
        if(e.once) {
          this.list[name].splice(i--, 1);
        }
      }
      if(this.list[name] && this.list[name].length === 0) {
        delete this.list[name];
      }
    }
  }

  on(name, callback) {
    if(!this.has(name)) {
      this.list[name] = [];
    }
    this.list[name].push({
      callback: callback
    });
  }

  once(name, callback) {
    if(!this.has(name)) {
      this.list[name] = [];
    }
    this.list[name].push({
      once: true,
      callback: callback
    });
  }

  off(names) {
    if(this.isArray(names)) {
      names.forEach(name => delete this.list[name]);
    } else {
      this.list = Object.create(null);
    }
  }

}

export default Emitry;
