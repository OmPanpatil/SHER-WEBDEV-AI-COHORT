// let btn = document.querySelector('button');
// let boxes = document.querySelector('#box');

// btn.addEventListener('click', function(){
//     let c1 = Math.floor(Math.random()*256);
//     let c2 = Math.floor(Math.random()*256);
//     let c3 = Math.floor(Math.random()*256);

//     // boxes.style.backgroundColor = `rgb (${(c1)}, ${(c2)}, ${(c3)})`;
//     // console.log("1");
//     boxes.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    
// })

// let num = Math.floor(Math.random()*100);
// console.log(num);

let boxes = document.getElementById('box');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    // boxes.style.border = `rgb(${c3}, ${c1}, ${c2})`;

    boxes.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    // console.log(c1);
})

let arr = ['Goku', 'Berserk' ,'Naruto', 'Kakashi', 'Light Yagami'];
console.log(arr.length);
var num = Math.floor(Math.random()*arr.length);
console.log(arr[num]);




