// closure

console.log("Question.1 :");

function caller(acc){
    setTimeout(acc,3000);
}

caller(function(){
    console.log("Hey");
    
});

console.log("Question.2 :");

let arr = [1,2,3,4,5,,6];

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


