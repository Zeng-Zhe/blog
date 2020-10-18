function wrap() {
  let test = '测试作用域链';
  function read() {
    console.log(test);
  }
  read();
}

wrap();
