const arr = ['a', 36.6, 'John Doe'];

const obj = {};

const arrayObject = arr.forEach((elem) => {obj[elem] = elem;});

console.log(obj);

console.log('-------------------------------------------------------');


const array = [
    [ 'height', 170 ],
    [ 'weight', 80 ],
    [ 'sport', 'regbi' ],
    [ 'full name', 'John Doe' ],
    [ 'sing', 'love' ],
    [ 'speed', 90 ]
  ];


const obj2 = {};

array.forEach((elem) => {const key = elem[0]; const value = elem[1]; obj2[key] = value;})

console.log(obj2);

console.log('-------------------------------------------------------');

const arr2 = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };

const arr3 = [];

const result = (array) => {Object.keys(array).forEach(key => {arr3.push(array[key])}); return arr3.join(', ')};

console.log(result(arr2));

console.log('-------------------------------------------------------');


const type = {};

Object.keys(arr2).forEach(key => type[key] = typeof arr2[key]);

console.log(type);


console.log('-------------------------------------------------------');


const type2 = {};

Object.keys(arr2).forEach(key => {type2[key] = {value: arr2[key], typeOf: typeof arr2[key]}});

console.log(type2);