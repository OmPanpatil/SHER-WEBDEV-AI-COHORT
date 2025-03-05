console.log("Question.1 : Create a function that takes a callback and execute it after every 'n' seconds" );

// q.1 :

function execution(fnc,time){
    setInterval(fnc,time);
}

execution(function(){
    console.log("hahahaha");
},2000);

// Q.2 :

function greetinkarro(greeting){
    return function(name){
        console.log(`${greeting} ${name}` )
    }
}

let greetings = greetinkarro("Namaste");

greetings("Kajal");