//#region 01
//声明一个构造函数，按照约定，首字母大写
function Person() {}
//创建完成后，就会有一个原型对象
console.log(Person.prototype);

// {
//   constructor: Person();
//   __proto__: Object;
// }

// 默认只会有constructor属性，指向构造函数。这里指向了Person
console.log(Person === Person.prototype.constructor); // true
//#endregion 01

//#region 02
let person1 = new Person();
//每个对象都拥有__proto__。用于获取原型
console.log(person1.__proto__ === Person.prototype); //true
//#endregion 02
//#region 03
function Car() {}
Car.prototype.name = 'abc';
let car = new Car();
console.log(car.name); //abc
//#endregion 03

//#region 04
let obj = new Object();
console.log(obj.__proto__ === Object.prototype); //true

//Person.prototype也是对象，由Object构造，所以指向Object.prototype
console.log(Person.prototype.__proto__ === Object.prototype); //true
//#endregion 04

//#region 05
console.log(Object.prototype.__proto__ === null); //true
//#endregion 05
