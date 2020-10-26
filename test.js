export default function debounce2(fn, delay) {
  // 维护一个 timer
  let timer = null;

  return function () {
    // 获取函数的作用域和变量
    let context = this;
    let args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
