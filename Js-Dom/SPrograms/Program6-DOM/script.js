var btn = document.querySelector('button');

// console.log(btn);

btn.addEventListener('click', function(){
    var images = document.createElement('img');
    // console.log(images);
    images.setAttribute('src', './images/image1.png');
    images.style.padding = '2rem';
    images.style.width = '20rem';
    console.log(images);
    var bodies = document.querySelector('body');
    bodies.appendChild(images);

    images.setAttribute('class', 'imege');
    var x = Math.random()*80;
    var y = Math.random()*50;
    var z = Math.random()*50;
    var rot = Math.random()*360;
    images.style.left = x + '%';
    images.style.top = y + '%';
    images.style.position = z + '%';
    images.style.rotate = rot + 'deg';
})


// let arr = ['CSK', 'MI', 'RCB', 'KKR', 'SRH', 'DC', 'PBKS', 'RR', 'LSG', 'GT'];
// // console.log(arr);
// let btn = document.querySelector('button');
// let heading2 = document.querySelector('h2');

// btn.addEventListener('click', function(){
//     let num = Math.floor(Math.random()*arr.length);
//     let winner = arr[num];
//     console.log(winner);
//     heading2.innerHTML = winner;
// })