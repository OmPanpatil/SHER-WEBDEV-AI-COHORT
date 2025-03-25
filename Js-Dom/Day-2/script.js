let btn = document.querySelector('button');
let boxes = document.querySelector('#box');

btn.addEventListener('click', function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    // boxes.style.backgroundColor = `rgb (${(c1)}, ${(c2)}, ${(c3)})`;
    // console.log("1");
    boxes.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    
})