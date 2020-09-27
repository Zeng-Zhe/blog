//#region 01
//声明一个函数
function Person() {}
//创建完成后，就会有一个原型对象
console.log(Person.prototype);

// {
//   constructor: Person();
//   __proto__: Object;
// }

// 默认只会有constructor属性，指向构造函数。这里指向了Person
console.log(Person === Person.prototype.constructor); // true
let person1 = new Person();
//每个对象都拥有__proto__。用于获取原型
console.log(person1.__proto__ === Person.prototype);
//#endregion 01

//#region 02
function Car() {}
Car.prototype.name = 'abc';
let car = new Car();
console.log(car.name); //abc
//#endregion 02
