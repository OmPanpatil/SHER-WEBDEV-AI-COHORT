// Q1 
console.log("hello, world!");
console.error("Hello, world!");
console.warn("Hello, world");
console.info("Hello, world!");
console.table({name : "Om", age : 21});

// Q2
console.log("Question2");

console.log(35*2 - (10/2) + 7);

// Q3

console.log("Question3");
console.log("To know any type we can write typeof under double inverted comma");
console.log("Null is a object type was a error. And typeof is a datatags ");
console.log(typeof Number(12));



// Q4

console.log("Question4");

console.log(typeof 12);

// Q5

console.log("Question5 : Write a program to swap values of two numbers ?");

var a = 12;
var b = 13;
var c;

// c = a;
// a = b;
// b = c;

// console.log(a,b);

// [a,b] = [b,a];

// console.log(a,b);

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);

// Q6 : Group

console.log("Q6");
console.groupCollapsed("Plan Execution :");
// console.group("Plan Execution :");
    console.log("Calisthenics");
    console.log("Coding and problem solving");
    console.log("Web Dev");
console.groupEnd();




// console.group

// Mapping : Map aek naya array banata hai and us array mein haar bar element lekae atta hai jou map mae sae return karega.


// map : 
var arr = [1,2,3,4]

arr.map(function(chacha){
    return 12;
})

// ForEach : Every member of array will folllow it.
var arr2 = [1,4,6,9]

arr2.forEach(function(value){
    console.log(value);
})

// Filter : yah toh true or false

var arr3 = [1,2,3,4]

var ans = arr3.filter(function(value){
    // return value>2;
    return value === 3;
})

console.log(ans);

// Reduced : aek badasae array ko aek chotti si single value mae convert karna.

var arr4 = [1 , 2, 3, 4]

var ans2 = arr.reduce(function(accumulator, value){
    return accumulator + value;
},0)

console.log(ans2);

// Question

var arr5 = [1, 2, 3, 4, 5]

var ans3 = arr.reduce(function(accumulator, value){
    return accumulator + value;
},0)

console.log(ans2);

// Question :

let i = 3;
while(i<31){
    console.log(i);
    i+=3;
}

// Question :

let sum = 0;

for(let i = 1; i<101; i++){
    sum = sum + i;
}

console.log(sum);

// Question

// Nested loop to be explain tomorrow

let str = "JAVASCRIPT";

for(let i of str) {
    console.log(i);
}

// Question

console.log("Question : Remove duplicate values from an array : ");

var arr6 = [1, 1, 1, 1, 2, 2, 3, 7, 7, 9]
// var arr7 = [...arr6];
// using set
var anss = [...new Set(arr6)];
console.log(anss);


console.log("Question : Find the second largest number in an array :");

console.log(" Question : Sort an array in ascending order :");







