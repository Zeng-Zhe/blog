export function debounce(func, wait = 500) {
  let timer;

  return function() {
    timer && clearTimeout(timer);
    let context = this;

    // if (immediate) {
    //   var doNow = !timer;
    //   timer = setTimeout(() => {
    //     timer = null;
    //   }, wait);
    //   if (doNow) {
    //     func.apply(context, ...arguments);
    //   }
    // } else {
    timer = setTimeout(() => {
      func.apply(context, arguments);
    }, wait);
    // }
  };
}

export function throttle(func, wait = 500) {
  let prev = Date.now();

  return function() {
    let now = Date.now();

    if (now - prev >= wait) {
      func.apply(this, arguments);
      prev = Date.now();
    }
  };
}
