// cashing the values to return the result if values are not change ,   optimize app performance
const memoizFunction = (value) => {
  const cache = {};
  return function add(value) {
    if (cache[value]) {
      console.log(value);
      return cache[value];
    }
    
  };
};
