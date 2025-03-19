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
// if(year%4 == 0 && year%100 != 0){
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

// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the number : "));
// let evensum = 0;
// let oddsum = 0;

// for(let i=0; i<=n; i++){
//     if(i%2==0){
//         evensum += i;
//     }
//     else{
//         oddsum += i;
//     }
// }

// console.log(`The sum of even number is : ${evensum}`);
// console.log(`The sum of odd number is : ${oddsum}`);


// Leap year :

// const prompt = require('prompt-sync')();
// let n = Number(prompt("Enter the year : "));
// let isleap = false;

// if(n%4==0 && n%100 !=0){
//     isleap = true;
// } else if(n%400==0){
//         isleap = true;
//     } else{
//         isleap = false;
//     }



// console.log(isleap? "This year is a Leap year." : "This year is not a Leap year.");

// return isleap? console.log("This year is a leap year.") : console.log("This year is not a leap year.");

// Q.9 :  Discount :

// const prompt = require('prompt-sync')();
// let amount = prompt("Enter the amount : ");
// let discount = 0;

// if(amount>0 && amount<=5000){
//     discount=0;
// } else if(amount>5000 && amount <= 7000){
//     discount = 5;
// } else if(amount>7000 && amount<=9000){
//     discount = 10;
// } else if(amount>9000){
//     discount = 20;
// }
// else{
//     console.log("Invalid input.");
// }
// console.log("The discount amount is : " + (amount-((amount*discount)/100)));

// Q.10 : Electricity bill :

// const prompt = require('prompt-sync')();
// let unit = prompt("Enter the unit : ");

// let amount = 0;

// Approach 1 :

// if(unit>0 && unit<=100){
//     amount = unit*4.2;
// } else if(unit>100 && unit<=200){
//     amount = (100*4.2) + (unit-100)*6;
// } else if(unit>200 && unit<=400){
//     amount = (100*4.2) + (100*6) + (unit-200)*8;
// } else if(unit>400){
//     amount = (100*4.2) + (100*6) + (200*8) + (unit-400)*10;
// }
// else{
//     console.log("Invalid input.");
// }
// console.log(amount);

// Approach : 2 

// let amount = 0;

// if(unit>400){
//     amount = (unit-400)*13;
//     unit=400;
// }
// if(unit>200 && unit<=400){
//     amount = amount + (unit-200)*8
//     unit= 200;
// }
// if(unit>100 && unit<=200){
//     amount = amount + (unit-100)*6;
//     unit = 100;
// }
// if(unit>0 && unit<=100){
//     amount = amount + unit*4.2;
//     unit = 0;
// }
// console.log(amount);

// Q.10 : Enter 1 to n.

// const prompt = require('prompt-sync')();
// let n = prompt("Enter the number : ");

// 1 to n

// for(let i=0; i<=n; i++){
//     console.log(i);
// }


// Q.11 : Sum upto n terms.

// const prompt = require('prompt-sync')();
// let n = prompt("Enter the number : ");
// let sum = 0;

// for(let i=1; i<=n; i++){
//     sum +=i;
// }
// console.log(sum);

// Q.12 : power of a and b :

// console.log(Math.pow(2,5));

// Q.divisible 

// const prompt = require('prompt-sync')();
// let n = prompt("Enter the number : ");

// for(let i=0; i<=n/2; i++){
//     if(n%i == 0){
//         console.log(i);
//     }
// }
// console.log(n);

// Q. prime number :

// const prompt = require('prompt-sync')();
// let n = prompt("Enter the number : ");
// let isprime = true;
// for(let i=2; i<n/2; i++){
//     if(n%i==0){
//         isprime = false;
//         break;
//     }
// }
// // console.log();
// if(isprime){
//     console.log("This is a prime number.");
// }else{
//     console.log("This is not a prime number.");
// }

// Q.13 : isprime :

// const prompt = require('prompt-sync')();
// let n = prompt("Enter the number : ");
// let isprime = isprimefun(n);

// if(isprime){
//     console.log("Prime number.");
// } else{
//     console.log("Not a prime number.");
    
// }

// function isprimefun(n){
//     if(n<=1){
//         return false;
//     }
//     if(n==2){
//         return true;
//     }
//     if(n%2==0){
//         return 
//     }
//     for(let i=3; i<=Math.floor(Math.sqrt(n)); i += 2){
//         if(n%i==0){
//             return false;
//         }
//         return true;
//     }
// }

// While : initialisation, condition, updation

let n=5;
let i=1;

while(i<=n){
    console.log(i);
    i++;
}

// For: use for known like items we are known
// While : use for unknown till it spends.
// % to eliminate and gives the last number : it gives the remainder.
// here, / gives the firsts numbers : it gives the quotient.





