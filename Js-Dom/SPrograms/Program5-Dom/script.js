var image1 =document.querySelector('#img1');
var image2 =document.querySelector('#img2');
var btn = document.querySelector('button');

btn.addEventListener('click', function(){
    // console.log('button clicked!');
    var image1src = image1.getAttribute('src');
    var image2src = image2.getAttribute('src');
    // console.log(image1src);
    image1.setAttribute('src', image2src);
    image2.setAttribute('src', image1src);
})

// Svg : 
