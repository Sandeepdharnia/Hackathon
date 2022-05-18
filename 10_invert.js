const invert = obj => {
    const newObject = {};
    Object.keys(obj).forEach(key => {
        let values = obj[key];
        newObject[values] = key;
    });
    console.log(newObject);
  };
  
  invert({ a: 3, b: 2 }); // { 2: 'b', 3: 'a' }