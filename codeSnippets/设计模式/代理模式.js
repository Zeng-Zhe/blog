function addALL(...arg) {
  console.log('进行了一次新计算');

  return arg.reduce((ac, cv) => {
    return ac + cv;
  }, 0);
}

// addALL(1, 2, 3, 4);

// console.log(addALL(1, 2, 3, 4));

let proxyAddAll = (function() {
  let cache = {};
  return function() {
    let arg = Array.prototype.join.call(arguments, ',');
    // console.log(arg);
    if (arg in cache) {
      return cache[arg];
    }
    return (cache[arg] = addALL(...arguments));
  };
})();

console.log(proxyAddAll(1, 2, 3, 4));
console.log(proxyAddAll(1, 2, 3, 5));
console.log(proxyAddAll(1, 2, 3, 4));
console.log(proxyAddAll(1, 2, 3, 5));

(function() {
  const girl = {
    name: '小美',
    age: 18,
  };

  const proxy = new Proxy(girl, {
    get(girl, key) {
      console.log(girl, key);
    },
  });
  console.log(girl);
})();
