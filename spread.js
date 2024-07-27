//what is an spread operator do

let fruits=["apple","Banana","mango","papaya"];

console.log(fruits);
//opens up the array 

//what is the use ??
//we cant use max and min function for array 
let nums=[1,2,3,4,5,6];

console.log(Math.max(...nums));
console.log(Math.min(...nums));
console.log(...fruits);

//we can also combine the array

let items=[...fruits,...nums];
console.log(items);


