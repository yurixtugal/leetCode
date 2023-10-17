/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const memCache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (memCache.has(key)) {
      return memCache.get(key);
    }

    const result = fn(...args);
    memCache.set(key, result);

    return result;
  };
}

