function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);

    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }

    return collection;
}

myEach([1, 2, 3], console.log);
myEach({ one: 1, two: 2, three: 3 }, console.log);

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let newCollection = [];

    for (let i = 0; i < values.length; i++) {
        newCollection.push(callback(values[i]));
    }

    return newCollection;
}

console.log(myMap([1, 2, 3], function (num) { return num * 3; }));
console.log(myMap({ one: 1, two: 2, three: 3 }, function (num, key) { return num * 3; }));


function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);

    for (let value of values) {
        if (acc === undefined) {
            acc = values[0];
            continue;
        }
        acc = callback(acc, value, collection);
    }

    return acc;
}

console.log(myReduce({ one: 1, two: 2, three: 3 }, function (acc, val, collection) { return acc + val; }));

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);


    for (let value of values) {
        if (predicate(value)) {
            return value;
        }

    }
    return undefined;
}

console.log(myFind([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 === 0;
 })); 

 function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
  
    for (let value of values) {
      if (predicate(value)) {
        result.push(value);
      }
    }
  
    return result;
  }

  console.log(myFilter([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 === 0;
  })); 
  
  console.log(myFilter({one: 1, three: 3, five: 5}, function(num) {
    return num % 2 === 0;
  }));

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.values(collection).length;
    } else {
      return 0; 
    }
  }

  console.log(mySize({ one: 1, two: 2, three: 3 }));
  console.log(mySize([]));


  function myFirst(array, n) {
    if (!Array.isArray(array) || array.length === 0) return undefined;
  
    if (n === undefined) {
      return array[0]; 
    } else {
      return array.slice(0, n); 
    }
  }

  console.log(myFirst([5, 4, 3, 2, 1]));
  console.log(myFirst([5, 4, 3, 2, 1], 3));

  function myLast(array, n) {
    if (!Array.isArray(array) || array.length === 0) return undefined;
  
    if (n === undefined) {
      return array[array.length - 1]
    } else {
      return array.slice(-n);
    }
  }

  function myKeys(object) {
    return Object.keys(object);
  }

  function myValues(object) {
    return Object.values(object);
  }