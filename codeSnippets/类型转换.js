// let num = 123;
// let str = 'gorvey';
// let bool = true;
// let nu = null;
// let ud;
// let obj = { foo: 'bar' };

// console.log(`${num},${str},${bool},${nu},${ud},${obj}`);
// console.log(num + str + bool + nu + ud + obj);

// window.name = '123';

function sort(arr) {
  let len = arr.length;

  for (let i = len; i >= 1; i--) {
      let index = i - 1;
    let current = arr[index]
    let prev = arr[index - 1]
    if (current < prev) {
      let temp = current;
      current = prev;
      prev = temp;
      
    }
  }
    return arr;
}

let result = sort([1, 6, 8, 3, 2, 5, 4, 7, 9])

console.log(result)