console.log("Hloo");
console.warn('This is js, no turnning back!');
console.error('No error');

// Variable :
let a = 10;   //Declaration and initialization
// let, var and const for constants
let b = 20;
console.log(a , b);

// confirm('Are u 18+ ');

// prompt('Enter ur name : ');

// Note : alert for messages, prompt for input or answer, confirm : to confirm yes/no 

// Var is a global value and window, but let and const are local. 

// Data Types: (1) primitive data types : number(10,10.5, 10.555), Strings('a', "Om", 'Sheryians coding school'), Boolean(true[1] or false[0], undefined, null, Symbol, BigInt)  , (2) Reference data types : Array, Object, Function   
var v = 10;
console.log(v);

var x =10;
var y =20;
console.log(x + y);

// Concatenation add for a string and subtraction for string is NaN.
// for example :
var r = '10';
var s = '10';
console.log(r + s);
// int+int = int, string +int =string, int+string = string, string+string = string

// var num1 = prompt('Enter a number : ');
// var num2 = prompt('Enter a number : ');

// var num1real = Number(num1);
// var num2real = Number(num2);

// console.log(num1real + num2real);


// Hoisting :
// console.log(aa);
// var aa = 10;

// Conditionals :
// if-else, else-if, switch, break, continue.
// var aaa =5;
// var bbb =3;
// if(aaa>bbb){
//     console.log(" a is greater than b ");   
// }
// else{
//     console.log(aaa + bbb + "is not euals.");
    
// }


// var age = Number(prompt("Enter ur age : "));

// if(age>18){
//     console.log("u are under 18. U can't vote now.");
// } else if(age==18){
//     console.log("u are of age 18. U can vote now.");   
// }else{
//     console.log("Not a voter.");
// }


// Binary : true : 1, false: 0
// &&(*) => 0 0 == 0, 0 1 == 0, 1 0 == 0, 1 1 == 1  (BOTH THE CONDITIONS MUST BE TRUE.)
// || (+) =>  0 0 == 0, 0 1 == 1, 1 0 == 1, 1 1 == 1 (IF ONE OF THE CONDITIONS IS TRUE. IT WILL BE TRUE)

// Difference between : == and === : == checks or compares the value only and === compare values as well as the data types.

// Data types : a) Primitive, b) Reference
// a) primitive : number(10,10.5,10.555), string, boolean, undefined, null, symbol, bigint
// b) referencs : array, objects, functions.

// var aa = 'om';
// var bb = 'Panpatil';
// console.log(aa + bb);  //Concatenation
// console.log(aa-bb);  //NaN : not a number 

// var aa = Number(prompt('Enter first number : '));
// var bb = Number(prompt('Enter second number : '));
// console.log(aa + bb);

// var aaa = null;
// console.log(aaa);
// var aa;
// console.log(aa);

// symbol : unique and immutable data type.
// var sym = Symbol('om);
// console.log(sym);

// var aa = 100000000000000000000000000000000000000000000000000000000000n;
// console.log(aa);
// Bigint is different from number. It is used to store large numbers.

// Undefined : Var is declared but not initialized.
// Null : Var is declared and initialized but no value is assigned to it.

// console.log(aa);
// var aa  = 10; //Hositing : var is hoisted to the top of the functions or global scope. Firstly, var is declared and then initialized.  output will be undefined.

// CONDITIONALS : if-else, else-if, switch-case, break, continue.

// let age = Number(prompt('Enter ur age : '));

// if(age>18 && age<60){
//     console.log('U are a voter.');
// } else if(age>60){
//     console.log('U are a senior citizen.');
// } else{
//     console.log('U are not a voter.');
// }


// Binary Operators : +,-,*,/,%,**(exponential), ++(increment), --(decrement), =, +=, -=, *=, /=, %=, **=
// Logical Operators : &&, ||, !
// Comparison Operators : ==, ===, !=, !==, >, <, >=, <=
// Bitwise Operators : &, |, ^, ~, <<, >>
// Ternary Operators : condition ? true : false
// Assignment Operators : =, +=, -=, *=, /=, %=, **=
// Identity Operators : ===, !==
// Instance Operators : instanceof, in, typeof
// Spread Operators : ... (used to spread the elements of an array or object.)
// Destructuring Operators : {key:value} (used to extract the values of an object and assign them to variables.)
// Optional Chaining Operators : ? (used to check if the value is null or undefined.)
// Nullish Coalescing Operators : ?? (used to check if the value is null or undefined.)
// Nullish Coalescing Assignment Operators : ??= (used to assign a value to a variable if the variable is null or undefined.)

// Exponential Operators : ** (used to calculate the power of a number.)
// console.log(2**3); // 8



// true = 1; false = 0;

// && => AND : Both the conditions must be true compusory. Then it will be a true value.

// 0 0 == 0
// 0 1 == 0
// 1 0 == 0
// 1 1 == 1

// || => OR : If the one of the conditions is true, then it will be true always.

// 0 0 == 0;
// 0 1 == 1;
// 1 0 == 1;
// 1 1 == 1;


// == : It compares the values only. It does not check the data types.  Example: 10 == '10' => true.
// === : It compares the values as well as the data types. It is strictly equal to.  Example: 10 === '10' => false.
// (!=) : It is not equal to. It compares the values only. It does not check the data types. Example: 10 != '10' => false.

// let unit  = Number(prompt('Enter the unit of electricity : '));
// let amount = 0;
// let punit=0;

// if(unit>=100){
//     punit = 10;
// } else if(unit>50){
//     punit = 8;
// } else{
//     punit = 5;
// }

// let amount = unit * punit;

// console.log('The amount is : ' + amount + ' Rs.');


// Strings methods : 

// 1. slice : Used to modify array elements. It can add or remove the elements from the array. It takes 3 parameters : (1) index, (2) no of elements to be removed, (3) elements to be added.

// let str = 'Hello world!';
// let ans = str.slice(0,3);
// console.log(ans);

// 2. Template litterals : It is used to create strings with operations or expressions.

// let aa = 'om!';

// console.log(`Hello, ${aa} world is waiting for u.`);

// 3. Split : It is used to split the string into an array of strings. It takes 1 parameter : Seperator.
// let str = ' Hello ji kaise ho ? ';
// let ans = str.split('i');
// console.log(ans);

// 4. replace : It is used to replace the string with another string. It takes 2 parameters : (1)old string, (2) new string.

// let str = 'Hello world!';
// let ans = str.replace('world','om');
// console.log(ans);

// 5. Includes : It is used to check if the string contains the specified string. It returns true or false.
// let str = 'Hello world!';
// let ans = str.includes('world');
// console.log(ans);

// break : loop ko rokta hai.
// continue : loop ko waha uss element se skip karta hai.

// var shery = (function(){
//     var name = 'Sheryians coding school';
//     var age = 10;
//     var city = 'Pune';
//     var country = 'India';

//     function getName(){
//         return name;
//     }

//     function getAge(){
//         return age;
//     }

//     function getCity(){
//         return city;
//     }

//     function getCountry(){
//         return country;
//     }

//     return {
//         getName: getName,
//         getAge: getAge,
//         getCity: getCity,
//         getCountry: getCountry
//     };
// })();
// console.log(shery.getName());

// var shery = (function(){
//     return{
//         imageeffect : function(){
//             console.log("Image effect applied.");
//         },
//         mousefollower : function(){
//             console.log("Mouse follower applied.");
//         }
//     };
// })();

// shery.imageeffect();

// Q.1 : write hello

// console.log("Hello");
// console.warn("hello");
// console.error("hello");
// console.info('hello');
// console.table({name:'om', age:10, city:'pune'});
// confirm("Are u 18+");

// Q.2 : remove duplicate array elements

// var arr = [1,2,3,4,2,1,2,4,5,3,5,4,3];
// var ans = [...new Set(arr)];
// console.log(ans);

// Q.3 : FInd the second largest number in an array

// var arr = [1,4,2,4,21,1,2,4,68,80,90,100,400];
// var unique = [...new Set(arr)];
// console.log(unique);
// var sort = unique.sort(function(a,b){
//     return b-a;
// });
// console.log(sort);
// console.log(sort[1]);

// Q.4 : sort an array in descending order

// var arr = [1,4,2,5,3,6,3,6,3,6,8];

// var unique = [...new Set(arr)];
// var sort = unique.sort(function(a,b){
//     return b-a;
// })
// console.log(sort);

// [...new Set(arr)].sort(function(a,b){
//     return b-a;
// })
// console.log(sort);

// (1)
// getAttribute : It is used to get the value of the specified attribute of an element. It takes 1 parameter : attribute name.
// setAttribute : It is used to set the value of the specified attribute of an element. It takes 2 parameters : (1) attribute name, (2) attribute value.
// (2) Creating an element,
// (3) Mouse events, Keyboard events, scroll events, double click events, wheel events, etc.

let heading1 = document.querySelector('h1');
heading1.innerHTML = 'How is it going?';

