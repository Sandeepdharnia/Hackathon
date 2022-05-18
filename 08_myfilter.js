const myFilter = (array, filterFunction) => {
  let myArray = [];
  for (let i = 0; i < array.length; i++) {
    let result = filterFunction(array[i]);
    if (result !== undefined) {
      myArray.push(result);
    }
  }
  return myArray;
};

const newArray = [1, 2, 3, 4, 5, 6, 7, 8];

const lessThanSix = item => {
  if (item > 5) {
    return item;
  }
};

console.log(myFilter(newArray, lessThanSix));
