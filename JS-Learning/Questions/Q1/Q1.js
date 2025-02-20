// Age category Message : Adult or not , <18 is minor, <60 and >18 is adult, >60 u are Senior citizen

// Declaration
let userage = prompt("Enter ur age : ");

if(userage>=18 && userage<=60){
    console.log("You are an adult.");
}else if(userage<18){
    console.log("You are a minor.");
}else{
    console.log("You are a Senior Citizen.");
}