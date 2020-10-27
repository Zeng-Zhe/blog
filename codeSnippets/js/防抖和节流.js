export function debounce(func, wait = 500, immediate) {
  let timer;
  return function() {
    timer && clearTimeout(timer);
    let context = this;

    if (immediate) {
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      func.apply(context, ...arguments);
    }

    timer = setTimeout(() => {
      func.apply(context, ...arguments);
    }, wait);
  };
}
