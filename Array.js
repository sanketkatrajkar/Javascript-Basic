let num = [ 2, 4, 5, 6];
let Arr = ["Sanket", 11, 89.90, 'S', 49];

console.log(num.length);
console.log(Arr.length);  
console.log(typeof(num)); // object

let fruits = ["mango", "apple", "litchi"];

console.log(fruits); // [ 'mango', 'apple', 'litchi' ]
console.log(fruits.sort());

fruits[0]= "banana";

console.log(fruits); // mutable array in js [ 'banana', 'apple', 'litchi' ]

fruits.push("papaya");
console.log(fruits);  // [ 'banana', 'apple', 'litchi', 'papaya' ]

fruits.pop();
console.log(fruits); // [ 'banana', 'apple', 'litchi' ]

fruits.unshift("mango");
console.log(fruits);      // [ 'mango', 'banana', 'apple', 'litchi' ]

let remove = fruits.shift();
console.log(remove);         // Start se Delete krana 

let colors = ["ret", "yello", "Green", "white"];

console.log(fruits.concat(colors));
//  [
//     'banana', 'apple',
//     'litchi', 'ret',
//      'yello',  'Green',
//     'white'
//    ]
//

console.log(fruits.reverse());  // [ 'litchi', 'apple', 'banana' ]

console.log(fruits.splice(0,1, "Orange"));

console.log(colors.sort());

let marks = [33, 55, 200 , 4, 22, 56];
console.log(marks.sort());             //[ 200, 22, 33, 4, 55, 56 ] 
                                       // First they are converted into the string then sorted by there uni value

const arr = [1,2,3];

console.log(arr.push(4));
console.log(arr);

arr = [4,5,6]; // TypeError: Assignment to constant variable.

console.log(arr); // Do not add new array in const array 



