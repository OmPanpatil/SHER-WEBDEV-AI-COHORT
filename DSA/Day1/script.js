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


// Day-2 :

console.log("Day2 :");

console.log(Math.floor(5/2));  //to level down the number.
console.log(Math.ceil(10.2));  //to level up the number.
console.log(Math.round(10.4));
console.log(Math.round(10.5));  // round behaves as a math.floor if the value is from 1.0 to 1.4 and math.ceil if the value is from 1.5 to 1.9.
console.log(Math.abs(-5));

console.log(Math.trunc(104758.368493978));

console.log(Math.pow(5,2));  //5^2

console.log(Math.sqrt(25));
console.log(Math.sqrt(40)); //If the value of square root is not a perfect square, then it will return the value in decimal.

console.log(Math.cbrt(27));  //Cube root of 27
console.log(Math.cbrt(60));

console.log(Math.max(1,5,3,5,3,2,8));

console.log(Math.min(3,5,2,6,9,1));

console.log(Math.random());
let ra = 375392.9576562;
console.log(Number(ra.toFixed(3)));

console.log("Q1. Compound interest :");

// C.I = P[(1 + R/100)^t]-P;  = A-P;

let P = Number(prompt("Enter the Principal amount :"));
let R = Number(prompt("Enter the rate of interest :"));
let T = Number(prompt("ENter the time period :"));

CI = P *(Math.pow((1+R/100),T))-P;
console.log("Compound interest is : " + CI);


console.log("Q2. Generate OTP :");

console.log(Math.floor(Math.random()*90000 + 10000));  //It will generate a random number between 10000 to 99999 of five digits.

console.log("Q3. Area of a triangle by Heron's Formula : ");
// Sqrt of s(s-a)(s-b)(s-c) where s= (a+b+c)/2

let Aa = Number(prompt("Enter the first side of the triangle : "));
let Bb = Number(prompt("Enter the Second side of the triangle : "));
let Cc = Number(prompt("Enter the Third side of the triangle : "));

if(Aa+Bb<=Cc || Aa+Cc<=Bb || Bb+Cc<=Aa){
    console.log("Can't proceed further, sides are not valid.")
}
else{
    let s = (Aa+Bb+Cc)/2;
    console.log(Math.sqrt(s*(s-Aa)*(s-Bb)*(s-Cc)));
    
}

console.log("Q.4 : Circumference of a circle : ");
let radius = Number(prompt("Enter the radius of the circle : "));
console.log(2*Math.PI * radius);

console.log("Q.5 : Area of a circle : ");
console.log(Math.PI * Math.pow(radius,2));

console.log("If- else condition : ");

let aa1 = Number(prompt("Enter the first number : "));
let bb1 = Number(prompt("Enter the second number : "));

if(aa1>bb1){
    console.log("First number is greater than the second number.");
}
else{
    console.log("Second number is greater than the first number.");
}

if(aa1%2 == 0){
    console.log("First number is even.");
    
}
else if(bb1%2 == 0){
    console.log("Second number is even.");
    
}
else{
    console.log("Both numbers are odd.");
}

console.log("Q.3 :");
let username = prompt("Enter ur name : ");
let Age = Number(prompt("Enter ur age : "));
if(Age>=18){
    console.log("Congratulations " + username + " you are now eligible for voting.");
}
else{
    console.log("Sorry " + username + " you are not eligible for voting.");
    
}








































