export class Promise {
  constructor(fn) {

    try {
      fn(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
  }
  resolve() {

  }


}
Promise.prototype.then = function (onResolved) {

}
