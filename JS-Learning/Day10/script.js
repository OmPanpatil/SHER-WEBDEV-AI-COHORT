// closure

console.log("Question.1 :");

function caller(acc){
    setTimeout(acc,3000);
}

caller(function(){
    console.log("Hey");
    
});

console.log("Question.2 : Own map");

let arr = [1,2,3,4,5,6];

function omap(a, fnc){
    let newarr = [];
    for(let i=0; i<arr.length; i++){
        newarr.push(fnc(a[i]));
    }
    return newarr; 
}

let omapans = omap(arr, function(value){
    return value+3;
});

console.log(omapans);




// function hap(v){

// }

// hap(arr,function(){

// });

console.log("Question.4");

function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
        
    }
}

var callcounter = counter();
callcounter();
callcounter();
callcounter();

console.log("Question.5 :");


console.log("Practice Q1. Create a function that takes another function as an argument and calls it after 3 seconds(HOF + Callback ");

function calling(fn){
    setTimeout(fn,5000);
}

calling(function(){
    console.log("Heyyyyyyyy");
    console.log("Heyyyyyyyy");
    
});

console.log("Q2. Implement ur own version of .map as a higher-order function ");

let arrs = [1,2,3,4,5,6];

// Aek function banao joh ki accept karre array and accept karre ki kya chalana hai 

function callmap(a,fnn){
    let newarrs = []
    for(i = 0; i<arr.length; i++){
        newarrs.push(fnn(a[i]));
    }
    return newarrs;
}

callmap(arrs, function(value){
    return value+3;
})

// example-2 :

let nummers = [1,2,3,4,5,7,8,9,22];

function returnkar(v,fnnns){
    let newwnummers = [];
    for(i=0; i<nummers.length; i++){
        newwnummers.push(fnnns(v[i]));
    }
    return newwnummers;
    
}


let answers = returnkar(nummers, function(idharsaekaregauparacceptfnmae){
    return idharsaekaregauparacceptfnmae+6;
});

console.log(answers);

console.log("Question.3 : Write a function that uses closures to create a counter :");

// function counterss(fnnss){
//     let counting = [1,2,4,5];
// }

// counterss(function());

function counterrs(){
    let countttts = 3;
    return function(){
        countttts++;
        console.log(countttts);
    }
}

var karcount = counterrs();
karcount();
karcount();
karcount();
karcount();
karcount();

console.log("Question.4 : Implement a function that limits how many times another function can be called");

function limmmittts(fn,limit){
    let totalcalled = 0;

    return function(){
        if(totalcalled<limit){
            // console.log(limiter);
            totalcalled++;
            fn();
        }
        else{
            console.error("Buy pro pack for more limits");
        }
    };
}

let limiter = limmmittts(function(){
    console.log("Hayyyo");
    
},4);

limiter();
limiter();
limiter();
limiter();
limiter();
limiter();
