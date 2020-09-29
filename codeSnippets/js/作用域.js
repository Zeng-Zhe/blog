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
