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
( function () {
//#region 03
function first() {
  function second() {}
}
//#endregion 03
})()
( function () {
//#region 04
first.[scope] = [
  globalContext.Vo,

]
second.[scope] = [
  globalContext.Vo,
  firstContext.Ao,
]
//#endregion 04
} )()

//#region 05
var scope = "global scope";
function checkscope(){
    var scope2 = 'local scope';
    return scope2;
}
checkscope();
//#endregion 05