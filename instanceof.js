function instanceOf(obj, constructor) {
  if (typeof obj === "object" && obj === null) {
    return false;
  }

  if (!constructor) return false;

  while (obj) {
    if (obj.__proto__ === constructor.prototype) {
      return true;
    }
    // obj = obj.__proto__.__proto__ // this is wrong
    // when we do this we set that obj to 2 layers up.
    // and next time we enter while loop
    // 2 layers proto will be checked ie 3rd layer proto will
    // be checked and 2nd layer proto will be skipped and we don't want
    // that

    obj = obj.__proto__;
  }

  return false;
}
