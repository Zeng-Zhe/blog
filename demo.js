function newFactory1() {
  let obj = new Object(); //创建新对象
  let Constructor = [].shift.call(arguments); //使用shift方法更改arguments源对象
  obj.__proto__ = Constructor.prototype; //设置原型
  let result = Constructor.apply(obj, arguments); //将this指向为创建的obj，并执行构造函数
  return typeof result === 'object' ? obj : result; //如果返回值是一个对象。那么返回这个对象。否则返回创建的对象
}

//使用ES6
function newFactory(fn, ...params) {
  let obj = Object.create(fn.prototype); //创建一个对象，将原型设置为传入的构造器的原型
  let result = fn.apply(obj, params); //将this指向为创建的对象，执行传入的构造器
  return typeof result === 'object' ? result : obj; //如果返回值是一个对象。那么返回这个对象。否则返回创建的对象
}

newFactory1(Foo, 1, 2, 3);

function Foo() {
  this.name = 'Gorvey';
  console.log(this);
  Foo.prototype.name = 'protoName';
}

let foo = newFactory(Foo, 1, 2, 3);

let foo2 = new Foo(1, 2, 3);

console.log(foo.__proto__ === foo2.__proto__);
