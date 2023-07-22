
// does not deep copy functions , date, regex
function deepCopy(obj) {
  let result = obj;

  if (obj instanceof Set) {
    return new Set(deepCopy(Array.from(obj)));
  }

  if (obj instanceof Map) {
    const keyValue = [...obj];
    const clonedArray = keyValue.map((kv) => {
      return [deepCopy(kv[0]), deepCopy(kv[1])];
    });
    return new Map(clonedArray);
  }

  if (obj instanceof Object && typeof obj !== 'function' ) {
    result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      const value = obj[key];
      result[key] = deepCopy(obj[key]);
    }
  }

  return result;
}
