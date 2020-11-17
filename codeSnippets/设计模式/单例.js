// 静态方法
// 效率更高，但是必须使用提供的方法获取实例
class Storage {
  constructor() {
    console.log('调用了');
  }
  static instance;
  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }
}

let a = Storage.getInstance();
let b = Storage.getInstance();

// 闭包法/代理
// 调用方法无感。但是new会浪费资源
let singleBase = function() {
  singleBase.prototype.show = function() {
    console.log('123');
  };
};

let Single = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = new singleBase();
    }
    return instance;
  };
})();

let a1 = Single();
let b2 = Single();

console.log(a1 === b2);
