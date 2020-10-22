(function() {
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
})();

(function() {
  //#region 02
  function isEqual(arr) {
    return arr.every((n, i) => i === 0 || n === arr[i - 1]);
  }
  let arr = [1, 1, 1, 1];
  let arr1 = [1, 1, 1, 3];
  console.log(isEqual(arr));
  console.log(isEqual(arr1));
  //#endregion 02
})();

(function() {
  //使用js写个方法，使得数组的两个元素互换，要求高性能
  //#region 03
  function swap(arr, i1, i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  }
  let arr = [1, 2, 3];
  swap(arr, 0, 2);
  console.log(arr);
  //#endregion 03
})();
