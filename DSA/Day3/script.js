// Q.1 : If-else
let year = Number(prompt("Enter a year: "));
let isleap = false;

if(year % 4 == 0){
    if(year%100 == 0){
        if(year%400){
            isleap = true;
        }else{
            isleap = false;
        }
    }else{
        isleap = true;

    }
}else{
    isleap = false;
}
// console.log(isleap);
console.log(isleap ? "Leap Year" : "Not a leap Year. ");

let year1 = Number(prompt("Enter ur year : "));
let IsLeap = false;

if(year1%4==0 && year1%100 != 0){
    IsLeap = true;
} else if(year%400 == 0){
    IsLeap = true;
} else{
    IsLeap = false;
}
console.log(IsLeap ? "It is a leap year." : "It is not a leap year.");


// Shop discount 
// Amount : Discount = 0-5000 : 0%, 5001 - 7000 : 5%, 7001 - 9000 : 10%, more than 9000 : 20%

let amount = Number(prompt(" Enter the amount :"));
// let isamount = false;

// Bruteforce method :

// if(amount>=0 && amount<=5000){
//     console.log("No Discount.");
// } else if(amount>=5001 && amount<=7000){
//     console.log((5*amount/100));   
// } else if(amount>=7001 && amount<=9000){
//     console.log((10*amount/100));   
// } else if(amount>9000){
//     console.log((20*amount/100));
// }
// else{
//     console.log("Invalid amount.");  
// }


let discount = 0;

if(amount>=0 && amount<=5000){
    discount = 0;
} else if(amount>=5001 && amount<=7000){
    discount = 5;
} else if(amount>=7001 && amount<=9000){
    discount = 10;
} else if(amount>9000){
    discount = 20;
} else{
    console.log("invalid amount. ");
}
console.log(amount - (amount*discount/100));

// Q.3 : Electricity Bill
let units = Number(prompt("Enter the units : "));
let amount1 = 0;

// Bruteforce method :

if(units>0 && units<=100){
    amount1 = units*4.2;
} else if(units>100 && units<=200){
    amount1 = (100*4.2) + ((units-100)*6);
} else if(units>200 && units<=400){
    amount1 = (100*4.2) + (100*6) + ((units-200)*8);
} else if(units>400){
    amount1 = (100*4.2) + (100*6) + (200*8) + ((units-400)*13);
}
console.log(amount1);

let units1 = Number(prompt(" Enter the unit for better approach : "));
let amount2 = 0;

if(units1>400){
    amount2 = ((units1-400)*13);
    units1 = 400;
}
if(units1>200 && units1<=400){
    amount2 = amount2 + ((units1 - 200)*8);
    units1  = 200;
}
if(units1>100 && units1<=200){
    amount2 = amount2 + ((units1 - 100)*6);
    units1 = 100;
}

amount2 = amount2 + units1*4.2;
console.log(amount2);

// Loops : Two types of loop : Entry control(for, while) and Exit control (do-while) loop.

// for(initialization;condition;updation){}
for(let i = 1; i<=10; i++){
    console.log("watermelon");
    
}




