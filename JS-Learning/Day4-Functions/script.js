// What is function : Kuch code jo aap aage kabhi calana chaahoge to wou code chal jayega bass function ko call karne sae.
// It is a block of code which u can be resued and reduse at any point of time.

// function abcd() {
    
// }

function greet(){
    console.log("Good");
}

greet();

// Why function : jabh bhi aapko code turant nahi chalana and saath hi saath aapko us code ko reuse bhi karna hai aap function baanate hai.

function ghar(){
    console.log("ghar aao");
    console.log("Gate kholo");
    console.log("calisthenics karro");
    console.log("Code karro");
    console.log("Have dinner");
    
    
}

ghar();

// Why we need function : To reuse some code which is so long to re write

// WET : Writing Everything to many times
// DRY : Don't repeat Yourself

// How to create a function : 

// function functionname(){
    // code
// }

// functionname();

// How to call a function : FUnction functionname(){code;} functionname();

// How to pass a parameter into function :

// Argument is a value which can be send to variable as parameter which will store the value.

// Parameter is a variable which stores the value from argument.

function greets(dinner){
    console.log(dinner);
}
greets("We will have dinner together");


// types of functions :

// 1 . Function statement :

function abcd(){
    console.log("Wass up");
}
abcd();

// 2. Function Expressions :

var d = function nabcd(){
    console.log("Hahaha");
}
console.log(d);


// 3. Anonymous Function :

// A function with no name.

// function(){ code }

// 4. Fat arrow function : 

()=>{
    console.log("Fat arrow function");
}

// 5. Fat arrow with one paramter :

var vwa = (a)=>{
    console.log("Fat arrow function");
}
vwa(1);


// 6. fat arrow function with implicit return :

var wwe = ()=> "12";

var ans = wwe();

console.log(ans);

// Day - 5 :

// 1. Rest parameters :

function nummers(a, b, c, d, ...chacha){
    console.log(a, b, c, d, ...chacha);
}
nummers(1, 2, 3, 4 ,5 ,6);


// 2. Hoisting :
console.log(p);
var p = "Product";  //It will be breaking into declaration of variable and initialization of variable. And the declaration part will move on the first part of line.

// 3. IIFE :
// Immediate Invoked Function Expression : (); essae wrap karna aur function run karna and most important yeh private function hottae hai.

(function aabb(){
    console.log("IIFE");
    var b = 12;
    console.log(b);
    
})();


var ans = (function aabbcd(){
    var a = 12;

    return{
        set: function setter(val){
            a = val;
        },
    
        get: function(){
            console.log(a);
        },
    };
})();

ans.set("Yeh hai setter");
ans.get();
