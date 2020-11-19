!(function() {
  //获取全局对象
  let root =
    (typeof self == 'object' && self.self == self && self) ||
    (typeof global == 'object' && global.global == global && global) ||
    this ||
    {};

  //保存之前的_属性，如果存在冲突，用于还原
  var previousUnderscore = root._;

  let _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  //导出到node环境
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    //导出到浏览器环境
    root._ = _;
  }

  //当前版本
  _.version = '0.1';
})();
