let n = Number(prompt("Enter a number: "));
let reverse = 0;

while(n>0){
    let rem = n%10;
    reverse = (reverse*10) + rem;
    n = Math.floor(n/10);
}
console.log(reverse);