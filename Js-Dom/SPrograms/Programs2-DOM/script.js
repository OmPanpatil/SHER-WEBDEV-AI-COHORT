let arr = ['CSK', 'MI', 'RCB', 'KKR', 'SRH', 'DC', 'PBKS', 'RR', 'LSG', 'GT'];
// console.log(arr);
let btn = document.querySelector('button');
let heading2 = document.querySelector('h2');

btn.addEventListener('click', function(){
    let num = Math.floor(Math.random()*arr.length);
    let winner = arr[num];
    console.log(winner);
    heading2.innerHTML = winner;
})
