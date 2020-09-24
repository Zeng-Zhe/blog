// 原始值 -> boolean

//#region boolean
//不传任何参数，返回false
Boolean(); // false

//这6种情况返回false，其他都返回true
Boolean(undefined); //false
Boolean(null); //false
Boolean(+0); //false
Boolean(-0); //false
Boolean(NaN); //false
Boolean(''); //false

//效果是一样的
!!undefined; //false
!!null; //false
!!+0; //false
!!-0; //false
!!NaN; //false
!!''; //false

//#endregion boolean

// 原始值-> 数字
//#region number

//#endregion number

//原始值 -> 字符
//#region string
String(); // 空字符串
String(undefined); // undefined
String(null); // null

String(false); // false
String(true); // true

String(0); // 0
String(-0); // 0
String(NaN); // NaN
String(Infinity); // Infinity
String(-Infinity); // -Infinity
String(1); // 1
//#endregion string

// 原始值 -> object
//#region object
let num = 10;
console.log(typeof new Number(10)); //object

console.log(typeof Object(num)); //object
//#endregion object

//对象 -> boolean
//#region objectToBool
Boolean({}); //true

Boolean(function() {}); //true

Boolean(new Boolean()); //true

//双非运算符也是同样的效果
!!{}; //true

!!function() {}; //true

!!new Boolean(); //true

//#endregion objectToBool
console.log(!'0' == '0'); //false true
console.log(!'' == 1); //true
console.log('' == 0); //true
console.log(!'a' == 0); //true
console.log(![] == []); //false true
console.log(![] == 0); // true
console.log([] == 0); //false true
console.log(!![] == [1]); //true
console.log(!'' == [1]); //true
console.log('' == !'a'); //true
console.log(!'' == ''); //false
console.log(null == []); //false

console.log(null == ![]); //true false
console.log(null == false); //true false
console.log(null == true); //false

// console.log('a' > null); //false
