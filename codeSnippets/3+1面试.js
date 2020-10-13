//#region 01
/**
 *连值是指12345678901234567890这样的数字相连的组合，像[1,2,3,4,5]是连值，但[1,3,4,5,6]不是，因为没有相连。
 *注意9,0是连值,0,9不是
 * @param {[number]} stringArr 数字数组
 * @returns {Boolean} 是否是连值
 */
function isEvenValue(stringArr) {
  for (let i = 1; i < stringArr.length; i++) {
    // console.log(stringArr[i] - stringArr[i - 1]);
    if (
      stringArr[i] - stringArr[i - 1] !== 1 &&
      !(stringArr[i] === 0 && stringArr[i - 1] === 9)
    ) {
      return false;
    }
  }
  return true;
}
let arr = [9, 0, 1, 2, 3];
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [1, 2, 3, 4, 5, 7];
let arr3 = [0, 9];
console.log(isEvenValue(arr)); //true
console.log(isEvenValue(arr1)); //true
console.log(isEvenValue(arr2)); //false
console.log(isEvenValue(arr3)); //false
//#endregion 01
