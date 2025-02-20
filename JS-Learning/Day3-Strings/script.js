console.log("String");

console.log("Slice");
let a = "12a";
let sl = a.slice(0,2);
console.log(sl);

console.log("Template string");
// Important to write $ before {to calculate}
let tls = `Hey my age is ${12+9}`;
console.log("` is known as Backticks, Template literals or Template strings");

console.log("Splits");
let sp = "Hello ji kaise ho";
let ans = sp.split('i');
console.log(ans);

console.log("Replace");
let re = "Hello ji, kaise ho";
let replace = re.replace('i','y');
console.log(replace);
// replaceall
let replaces = re.replaceAll('i','y');
console.log(replaces);

console.log("Includes");

let inc = "Hello, world!";
let inccc = inc.includes("wo");
console.log(inccc);

console.log("Conditional statement :");
let i = 8;
if(i<=4){
    console.log("Hey");
}
else{
    console.log("helllllll");
}

console.log("Ternary operator");

12>11 ? console.log("Hahahaha"):console.log("Hehehehehe");

let nnum = 2;
nnum<16 ? console.log("Hahaha") : console.log("Hehehehe");
// console.log(nnumss);

console.log("Switch case");

let day = 4;

switch(6){
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    default : console.log("Sunday");
        break
}

console.log("Loops :");

console.log("For loop : for(initialization;condition;updation){} or (start,end,change){}");

for(i =1; i<=10; i++){
    console.log(i,'Hello');
}

console.log("While loop :");

let lo = 3;

while(lo<=8){
    console.log(lo + " Holla Bravo");
    lo++;
}

console.log("Loops Control Statements :");

console.log("Break control statement :");
for(j =1; j<=6; j++){
    console.log(j + " Haihaihaiahaiiii");
    if(j === 4){
        break;
    }
}
console.log("Continue control statement : ");

for(k =1; k<=6; k++){
    if(k === 4){
        continue;
    }
    console.log(k + " Hehehehhassdellae");
}