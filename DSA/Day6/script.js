let num1 = Number(prompt("Enter the first number : "));
let num2 = Number(prompt("Enter the second number : "));
let operator = prompt("Enter the operator(+,-,*,/) : ");

switch(operator){
    case '+':
        console.log("result is : " + (num1+num2));
        break;
    case '-':
        console.log("result is : " + (num1-num2));
        break;
    case '*':
        console.log("result is : " + (num1*num2));
        break;  
    case '/':
        console.log("result is : " + (num1/num2));
        break;  
    default:
        console.log("Invalid operator");
        break;      
        

}