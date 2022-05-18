const merge = (...objects) => {
  const newObject = {};
  for (let i = 0; i < objects.length; i++) {
    Object.keys(objects[i]).forEach(key => {
      if (!newObject[key] || newObject[key] === 0)
        newObject[key] = objects[i][key];
    });
  }
  return newObject;
};

console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 })); // { a: 3, b: 2, c: 4 }
console.log(merge({ a: 3, b: 2 }, { a: 2, c: 4 }, { e: 8, c: 5 })); // { a: 3, b: 2, c: 4, e: 8 }
