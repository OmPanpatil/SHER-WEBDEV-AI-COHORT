// Vanilla JS

console.log("Hello guys");
console.warn("This is warning");
console.error("This is error");

// Variables

var a = 18;
console.log(a);

// Blocks mae yaeh value store hotti hai

var b;    //Declaration
b=8;        //Initialization
console.log(b);

var c = 20;     //Initialization and updation
console.log(c);
console.log('c');

console.log(a,b,c);

console.log('C reinitialization');
var c = 40;
console.log(c);

// Js is a dynamic language

console.log('Js is a dynamic language');

// Arithmetic operators :

// +,-,*,/,%

var a = 20;
var b= 30;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);  //remainder

// alert - chrome-in-built

alert('Are u sure ?');
confirm('Are u 18+');
prompt("Enter ur name :")

var ans = confirm("There is no turning back. want to continue ?");

console.log(ans);

var user = prompt('How are u ?');
var user1 = prompt('How is it going ?');

console.log(user,user1);

// Operator
// a++,a--

var d =76;
console.log(d)

console.log(d++);

// let and const : are use to make variables

// Scope :


// Data types :

// Primitive and reference
// Primitive : Numbers(10,10.5,10.555) : Range - 2 raise to , string(''single quote or "" double quote), boolean (true or false), undefined, null , Symbol, BigInt

var a = 10;
console.log(a);

// Prompt :
var age = prompt('Enter ur Age ?')
console.log(age);

// NaN
// String mae sae string delete nahi hota

// + : Add => Concatination,

var a = '10';
var b = '20';

console.log(a+b);

var num1 = prompt('Enter number 1');
var num2 = prompt('Enter number 2');

console.log(num1+num2);

// Type conversion
var real1 = Number(num1);
var real2 = Number(num2);

console.log(real1+real2);

// var a  => Undefined

// var a = null

// Symbol :
// It is use for in the making of unique products

// BigInt :
// - Power : 2 raised to 53

// Hoisting :


// Conditionals :
//  If, else, else-if, 

if (10>5) {
    console.log('Yes');
} else {
    console.log('No');
}

// Comparision operator --> ==

// Ask a user his age and check if he/she is adult or not ?

var age = Number(prompt('Enter ur age '));

console.log(age);

if(age >= 18){
    console.log('You can go to OyO');
} else{
    console.log('Ghar jaake pogo dekhe');
}

// Ask a user

var marks = Number(prompt('Enter ur marks :'));

if (marks>90) {
    console.log("U got A+ Grade");
} else if(marks > 80){
    console.log("U got B+ Grade");
    
}else if(marks > 60){
    console.log("U got C+ Grade");

}
else{
    console.log("Failed");

}


// Binary operators : true -> 1 and false -> 0

// && (multiply pae kaam karta hai) --> 
// 0 0 == 0
// 0 1 == 0
// 1 0 == 0
// 1 1 == 1

// OR operator (||) -->

// 0 0 == 0
// 0 1 == 1
// 1 0 == 1
// 1 1 == 1

// Not equal to : !=
// == : Compare values (using in assigning value)
// === : Compare values and data types

// Questions -->

// 1) Ask a user his bijl ke units and if it is greater than 100 units then calculate on the basis of 10 rs per unit if more than 50 then calculate on the basis of 8rs per unit and if less calculate on 5rs per unit ?

var unit = Number(prompt('Enter units'))
var bill

if(unit>=100){
    bill = unit*10;
}else if(unit > 50){
    bill = unit*8;
}else{
    bill = unit*5;
}

// Ternary operator :
var a = 18;
console.log(a>10?console.log("Hello"): console.log("Not Hello"));


// Reference : Array, Object, Functions






// Js the language :

    // - It was introduced and written by Brenden Eig. It was delievered in 15 days only so it was lagging some features and hence, ECMA Script was a community who managed JS language like naye features laana, purrane features hataana, features sahi karna and overall development of JS.

    // Javascript has two versions  - 1) ES5 and before, 2) ES6 and after.

    // Es5 - var
    // ES6  - Let

    // It's like code likhna and seekhna

    // (1) Basics - file conne t karna, load script karna, basics of code executions, grammar and understanding of errors.

    var a = 12;
    var b = 22;
    console.log("Heyy");
    console.log(a, b); 

    // you deal can me with
    // Grammar : You can deal with me

    // ho ghar bhai chalo kaha
    // kaha ho bhai chalo ghar

    // You can have all the tools in the box and grammar(syntax) is like ability to use them.
    

    // (2) in-built features (Web context browser API) : 
    // - Console - log, warn, error; alert; confirm and prompt

    console.log("Hello");
    // () --> Parenthesis

    // Strings, number, float, double, dinary

    console.warn("Hell");
    console.error("Hehehehe");
    



    // (3) Variables and constants -->

    // Har programming language mein data hota aur un data sae deal karna hotta hai. Example : ATM. Wou alag alag prakar ka data ho sakhta hai. Ab aisa data, jessae humein deal karna hotta hai, wou save karna toh hoga and wou data save karne ke liye koi saving space honni chahiye jaha par data save hojaye and yeh save karne ke liye unhe kuchh naam bhi denna padega and isiliye humein variables and constants banane padte hai taaki data save hojaye and unka koi naam bhi ho taaki unhe baadmein hum save kar paaye.

    var discount = 10;   //Variables
    discount = 20;   //constants

    // Variables and constants hote hai data store karne ke liye and variables mein data store hotta hai and change bhi hojata hai and constants mein data store and change nahi hota. But, dono hi browser par memory lete hai and browser RAM par chalta hai to technically dono RAM par chalte hai yah fir space par chalte hai

    var a = 12;
    var b = 13;
    // const c = 34;

    console.log(a,b);


    // (4) Compilers and interpreters :

    // Js language eglish use karti hai computer english nahi samjhtae wou samajhte hai 0 and 1 (jisko aap current flow yeh current-bypass bhi keh sakhte ho) and hum chahte hai hum english mein likhe computer samajh jaaye. Toh, hum aek translator  lagayega jo ki humara code english mein lega and use 0 and 1 mein convert kardega 

    // Compiler and interpreters translator hai jo ki english code ko convert kar rahe hai machine code mein, js mein interpreter hai
    // Java, C -- compiler based language
    // JIT(Just in time compiler) : interpreter ki shuruat taakat use karta hai and compiler ki running taakat use karta hai

    // (5) Window :

    // Window is a collection of toolswhich are available in browser and it offers.
    // There are many features which are frequently use in js and they are not the part of it i.e. JS. They are not the part of js language but they are available in browser. And when we use them in js they are called from the browser and not the JS.

    var a = 12;
    console.log(a);
    

    // Types
    // conditionals 
    // Loops
    // Functions - 6 types of functions
    // Arrays
    // Objects
    // Prototypes
    // Prototypal inheritance
    // asynchronous JS 
    // ES6 Climax
    // Questions related to these



// JS the DOM - creating phase
// Code likhkar cheezein banana sikhna


// Day2

console.log("Day-2 : Sarthak Senseii");

// Data types :

console.log('Data Types :');

// - premitives  
//  - Number(10,10.5,10.555565),    range : 2^53 value
//  - String('a',"Sart", "Sheryians coding"),
//  - Boolean(True or False)
//  - Undefined, Null, Symbol, BigInt

// - reference
//  - Array, Object, Function

var a = 10;
// Number represent in blue colour
console.log(a);

var b = "SHA";
// String represnts in white colour
console.log(b);

// Prompt :

var figure = prompt("put a one digit figure : ");

console.log(figure);

console.log("Arithmetic Operations : ");

var a = 10;
var b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a , b);

var a = "VS";
var b = "Code";

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log("Not a Number");
console.log("+:Add (Concatination), -:Subtraction, *:Multiply, /:Division, %:Remainder");


console.log("String Type : ")
var user1 = prompt("Enter first username :");
var user2 = prompt("Enter first username :");

console.log(user1+user2);



console.log("Number :");

var nums1 = prompt("Enter ur nums 1 :");
var nums2 = prompt("Enter ur nums 2 :");

console.log(nums1+nums2);

console.log("Type conversion from string into Number :");

var numss1 = prompt("Enter ur numss 1 :");
var numss2 = prompt("Enter ur numss 2 :");
// Conversion into number from string
var numss1real = Number(numss1);
var numss2real = Number(numss2);

console.log(numss1real+numss2real);

console.log("Undefined");

var a;
console.log(a);
console.log("No value is initialized it is undefined");

console.log("Null value");

var z = null;   //Value store kardi as null or empty
console.log(z);

console.log("BigInt");
var y = 1000000000000000000000000000000000000000000n;     //write n at last for BigInt

console.log(y);

console.log("Hoisting : declaration and initialization will happen first");

console.log(x);

var x = 47;

console.log(x);

console.log("Conditionals :");

// if(condition){
//     condition agar true hogayi toh kya karna hai;
// }

if (10>5) {
    console.log("Yes");
    
} else {
    console.log("No");
}

console.log("operators :");
console.log("&&");
console.log(" f f == f");
console.log(" f T == f");
console.log(" t f == f");
console.log(" t t == t");
console.log("Both conditions should be true otherwise it will give false i.e. it will move from if into else");

console.log("|| (OR)");
console.log(" f f == f");
console.log(" f T == t");
console.log(" t f == t");
console.log(" t t == t");
console.log("If one condition is true from both then it will be true");



let str = ("Hello, world !");
let newstr = str.includes(",");

// For loop
// for(Start,end,change){}
// for(initialization,condition,updation){}

console.log("For loop : yeh condition tabtak chalega jabh tak yeh condition true rahegi");

for(let i=1; i<10; i++){
    console.log("Heyyy");
}

// loop is made for two things :
//  - Straight forward loop,
//  - Dynamic loop

console.log("While loop : start, condition, updation");



let i =2;
while (i<12) {
    console.log(i);
    i++;
}

console.log("do while");

let j = 2;
do {
    console.log(j);
    j++;
} while (condition);


// for(let k =1; k<23; k++){
    
// }





