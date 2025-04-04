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
})