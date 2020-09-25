// let bool = new Boolean(123);

// console.log(bool);

// bool.toString = function() {
//   console.log('自定义toString');
//   return 'string';
// };
// bool.valueOf = function() {
//   console.log('自定义valueOf');
//   return '123';
// };
// bool[Symbol.toPrimitive] = function(hint) {
//   console.log('hint', hint);
//   console.log('自定义toPrimitive');
// };
// let a = String(bool);
// let b = Number(bool);
// console.log(a, b);
var A = function() {};
A.prototype.n = 1;
var b = new A();
A.prototype = {
  n: 2,
  m: 3,
};
var c = new A();

console.log(b.n);
console.log(b.m);

console.log(c.n);
console.log(c.m);
