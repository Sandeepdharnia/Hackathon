const minMaxLengthAverage = array => {
  let result = array.reduce((acc, curr) => {
    acc += curr;
    return result;
  }, 0);
};

console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); // [ 3, 100, 5, 40 ]
