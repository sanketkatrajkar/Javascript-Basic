

let arr = [ 1, 2, 4, 65,34];

let print = function (el)
{
    console.log(el);
}

console.log(arr.forEach(print));

let num = [1, 2, 3, 4];

let double = num.map((el) => 
{
    return el * 2;
});

console.log(double);

console.log(..."apnacollege");

let arr1 = [ 1, 2,4,5, 6];

let newArr = [...arr1];

console.log(newArr);

let odd = [ 1 , 3, 5 , 7,9];
let even = [ 2, 4, 6,8, 10];

let oddeven = [...odd, ...even];

console.log(oddeven);


let names = ["sanket", "agar", "aman", "naman", "karan", "aniket"];
let [winner , runerUp, ...other] = names;

console.log(winner , runerUp, other); // sanket , agar ["aman", "naman", "karan", "aniket"]

