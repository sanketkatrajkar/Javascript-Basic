let msg = "       Apna  COLLEGE   ";

console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(msg.trim());
console.log(msg.indexOf("COLLEGE")); // output : 13 
console.log(msg.toUpperCase().trim()); // method chaining
console.log(msg.slice(10));     // Starting of index 10 upto total length
console.log(msg.slice(0,13)); // 0 to 13 length of stirng 
console.log(msg.slice(10 , msg.length)); // index of 10 up to total length
console.log(msg.slice(-10)); //convert into total - 10 form the string

let str = "I love coding ";
console.log(str.replace("love", " do ")); // Replace the love word to do 
console.log(str.repeat(2)); // I love coding I love coding


