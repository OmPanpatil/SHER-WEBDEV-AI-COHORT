// Q.1 : Compound interest :

// let p = prompt("Enter the principal amount : ");
// let r = prompt("Enter the rate of interest : ");
// let t = prompt("Enter the time period : ");

// const prompt = require('prompt-sync')();
// let p = prompt("Enter the principal amount : ");
// let r = prompt("Enter the rate of interest : ");
// let t = prompt("Enter the time period : ");
// let A = p * Math.pow((1+r/100),t);
// let cp = A - p;
// // let A = p * Math.pow((1+r/100),t);
// console.log(`The compound interest is : ${cp.toFixed(2)}`);

// Q.2 : OTP :

// console.log(Math.random()*90000);
console.log(Math.floor(Math.random()*9000 + 1000));


// Q.3: Herones's Triangle formula :
// let a = Number(prompt("Enter the first number : "));
// let b = Number(prompt("Enter the second number : "));
// let c = Number(prompt("Enter the Third number : "));

// if(a+b <= c || a+c <= b || b+c <= a){
//     console.log("The triangle is not possible.");
// } else{
//     let s= (a+b+c)/2;
//     console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
// }

// Q.4 : Leap year :

// let year = Number(prompt("Enter the year : "));
// let isleap = false;
// if(year%4 == 0 && year%100 != 100){
    // if(year%400 == 0){
    //     console.log("This year is exactly a leap year.");
    // }
    // else{
    //     console.log("This year is not a leap year.");
    // }
//     console.log("This year is a leap year.");
    
// } else if(year%400 == 0){
//     console.log("This year is exactly a leap year.");
// }
// else{
//     console.log("This year is not a leap year.");
// }

// Q.4 : Number printing :

// let n = Number(prompt("Enter the number : "));

// for(let i=1;i<=n; i++){
//     console.log("Hello, world!");
//     Process.stdout.write(" * ");
// }

// Q.5 : Table 

// let n = Number(prompt("Enter the table number : "));

// for(let i=1; i<=10;i++){
//     // console.log(`${n} +" "`);
//     console.log(n + " * " + i + " = " + (n*i));
// }

// Q.6 : Sum up to n terms 

// let n = Number(prompt("Enter the number : "));
// let sum = 0;
// for(let i = 1; i<=n; i++){
//     sum += i;
// }
// console.log(sum);

// Q.7 : factorial

// let n = Number(prompt("Enter the number : "));
// let fact=1;

// for(let i=1; i<=n; i++){
//     fact= fact*i;
// }
// console.log(fact);

// Q.8 : sum and odd numers seperately  and add them.

const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number : "));
let evensum = 0;
let oddsum = 0;

for(let i=0; i<=n; i++){
    if(i%2==0){
        evensum += i;
    }
    else{
        oddsum += i;
    }
}

console.log(`The sum of even number is : ${evensum}`);
console.log(`The sum of odd number is : ${oddsum}`);
