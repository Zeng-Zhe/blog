//#region 01
let value = 'Gorvey';

function foo() {
  console.log(value);
}

function bar() {
  let value = 'bar';
  foo();
}

bar();
//#endregion 01

//#region 02
let name = 'Gorvey';

function first() {
  console.log(name);
  second();
}

function second() {
  console.log('i am second func');
}

first();

//#endregion 02
