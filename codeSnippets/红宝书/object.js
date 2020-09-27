//#region 01
let person = new Object();
person.name = 'Gorvey';
person.sayName = function() {
  console.log(this.name);
};

person.sayName(); // Gorvey
//#endregion 01

//#region 02
let person = {
  name: 'Gorvey',
  sayName() {
    console.log(this.name);
  },
};
person.sayName(); // Gorvey
//#endregion 02

//#region 03
let person = {
  name: 'Gorvey',
};
//#endregion 03
