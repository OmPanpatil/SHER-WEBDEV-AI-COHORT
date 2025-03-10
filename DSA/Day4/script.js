let n = Number(prompt("Enter table number : "));
for(let i=1; i<=10; i++){
    console.log(n + "*" + i + "=" + n*i);
}

// Q.2

let n1 = Number(prompt("Enter table number : "));
let sum = 0;
for(let i=1; i<=n1; i++){
    sum = sum+i;
}
console.log(sum);

// Q.3

let n2 = Number(prompt("Enter table number : "));
let isprime = false;
for(let i=2; i<n2; i++){
    if(n2%i == 0){
        isprime = false;
        break;

    }
}

if(isprime){
    console.log("prime number.");
}
else{
    console.log("Not prime number.");
}

// process.stdout.prompt();

