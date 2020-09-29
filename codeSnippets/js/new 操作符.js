//#region 01
function Test() {
  this.name = 'Gorvey';

  Test.prototype.sayName = function() {
    console.log(this.name);
  };
}

let person = new Test();
console.log(person.name); //Gorvey
person.sayName(); // Gorvey
//#endregion 01
let variable = null;
//#region 02
function Test() {
  this.name = 'Gorvey';

  Test.prototype.sayName = function() {
    console.log(this.name);
  };

  return { name: 'abc' };
}

let person = new Test();
console.log(person.name); //abc
person.sayName(); // TypeError
//#endregion 02

//#region 03
function New() {
  //创建对象
  let obj = {};

  //设置__proto__
}
//#endregion 03
