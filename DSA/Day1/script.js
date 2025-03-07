let a = 10;
console.log(a);

console.log("Q1. :");
let a1 = 10;
let b1 = 20;
console.log(a1+b1);

console.log("Q2. :");

console.log("1. String + String = String.   Also known as concatenation");
let str1 = "Hello";
let str2 = "World!";
console.log(str1+str2);
console.log(typeof(str1+str2));

console.log("2. Int + String = String.   Also known as concatenation.");
let c = 3;
let str3 = "Hello";
console.log(c+str3);
console.log(typeof(c+str3));

console.log("3. Int + Int = Int.   It will be known as Arithmetic operation");

let d = 12;
let e = 23;
console.log(d+e);
console.log(typeof(d+e));

console.log("Q.3 : Sum & Message ");

let f = 45;
let g = 89;
console.log("Sum of " + f + " and " + g + " is equal to " + (f+g));

console.log("Q4. Accept and print the value . ");
let age = Number(prompt("Enter ur Age :"));
console.log(age);
let breakfast = prompt("What u had in ur breakfast ");
console.log(breakfast);

console.log("Q5. Swap two variables.");

// First method

let s1 = 2;
let s2= 3;
let temp;
temp = s1;
s1 = s2;
s2 = temp;
console.log(s1,s2);

// Second method

let s3 = 4;
let s4 = 5;
s3 = s3 + s4;     // s3 will be 9
s4 = s3 - s4;     // s4 will be 4
s3 = s3 - s4;     // s3 will be 9 - 4 = 5
console.log(s3,s4);     //s3 = 5, s4 = 4.

// Third
let s5 = 4;
let s6 = 8;

[s5, s6] = [s6,s5];    //DESTRUCTURING ASSIGNMENT OPERATOR
console.log(s5,s6);

console.log("6. Operators :");

console.log("% will give remainder.");

console.log("/ will return Quotient. ");

console.log("MOST IMPORTANT : IN JS, INTEGER/INTEGER WILL ALWAYS GIVE US SOME FLOAT VALUE. SO, WE USE MATH.FLOOR");
















