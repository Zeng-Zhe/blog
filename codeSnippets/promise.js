class myPromise {
  constructor(executor) {
    this.status = 'PENDING';
    this.value = '';
    this.reason = '';

    let resolve = value => {
      this.status = 'RESOLVED';
      this.value = value;
    };

    let reject = reason => {
      this.status = 'REJECTED';
      this.reason = reason;
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onrejected) {
    if (this.status === 'RESOLVED') {
      onFulfilled();
    }
  }
}

let test = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('someValue');
  }, 1000);
});

test.then(res => {
  console.log('then1');
});
test.then(res => {
  console.log('then2');
});
console.log(test);
