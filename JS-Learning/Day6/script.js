// var a;
// rest parameters :

function abcd(a, b, c, ...nummerss){
    console.log(a, b, c, nummerss);
    
}
abcd(1, 2, 3, 4, 5,6);

// Hoisting :

console.log(a);
var a = 12;
// a=12;

// Variable declaration will be at the top and initialization after the output. And that's the reason it leads to undefined not error.


// IIFE (Immediately Invoked Function Expressions):

// to wrap functions under ();

(function nabcd(){
    console.log("IIFE");
    var a = 12;
    var ans = a;
}) ();

// It keeps private because it keeps the variable private


var aagayaans = (function nabcd(){
    // console.log("IIFE");
    var a = 12;

    // function setter(val){
    //     a=val;
    // }

    // function getter(val){
    //     console.log(a);
        
    // }

    return{
        set : function(val){
            a = val;
        },

        get : function(){
            console.log(a);
            
        },
    };

}) ();

aagayaans.set(Number("14"));
aagayaans.get();

console.log(aagayaans);

// 2 Shery library

var Shery = (function sherrylibrary(){
    return{
        imageEffect: function(){
            console.log('Image effect');
            
        },
        mousefollower: function(){
            console.log('Mouse follower');
            
        },
    };
}) ();

Shery.imageEffect();
Shery.mousefollower();


// Higher Order Functions : 

// - Ek aisa function jou return kare function nahi toh accept kare function in parameter, ya fir dono.

function hos(){
    return function karrohos(){
        console.log("HOS");
        
    };
}

hos()();                //var karrohosans = hos()();
// console.log(karrohosans);

console.log("Accept karne walla function ");

function aabbccdd(fnc){
    fnc();
}

aabbccdd(function(){
    console.log("Accept karne walla function HOS");
    
});


// Call back function : kissi function mae jou function pass hota hai call karte waqt usse cb function kehte hai.

function pass(val){

}

pass(function(){

});

// First class function : The functions can be treated as a value.

// Pure function, impure function, global scope, local scope, Closures -> closures aek concept hai jismein function return karta hai aur aek function and returned function mein aap use karte ho parent function ka koi data.

function clo(){
    var a = 12;
    return function(){
        console.log(a);
        
    }
}

var anscol = clo();
anscol();
console.log(anscol());


