function notBlankObj(obj) {
  if (obj && Object.prototype.toString.call(obj) === '[object Object]' && Object.keys(obj).length > 0) {
    return true;
  } else {
    return false;
  }
}