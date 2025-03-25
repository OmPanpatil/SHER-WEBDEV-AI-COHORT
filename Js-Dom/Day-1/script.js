// var h = document.querySelector('h1');
// console.log(h);

// var h1 = document.querySelector('h1');
// h1.addEventListener('click',function(){

//     // var h = document.querySelector('h1');
//     // console.log(h);
//     h1.innerHTML='Nice';
//     h1.style.color = 'red';
// });

// Document.queryselector(' ');   It will select the element from the html file. Follow the same rule for targetting the elements by individual elements, id by # and class by . 
// To make the use of less i.e. not to repeat again and again the same step of selection. we can use Variable to store in it.

// var heading1 = document.querySelector('h1');
// console.log(heading1);

// var heading2 = document.querySelector('h5');
// console.log(heading2);

// Changing HTML :
// .innerHTML = ' '
// We can also select directly without using variable like we did in document.querySelector.

// var parass = document.querySelector('.d p');
// parass.innerHTML = '<strong>DOM</strong>';

// Changing CSS :
// .style.property = 'value'

// document.querySelector('ol').style.backgroundColor ='lightblue';

// document.querySelector('element'), document.querySelector('element'), document.querySelector('element')
// Changing HTML : element.innerHTMl = 'text change', element.innerHTMl= 'textchange', element.innerhtml = 'text change'
// changing css : element.style.property = 'value', element.style.property = 'value'

// Event listener : element.addEventListener(Two properties : konsa event aap chahte ho ki trigger ho, uss event kae trigger honnae par chahte ho ki kya hoo)

// heading1.addEventListener('click', function(){
//     console.log("clicked on h1");
//     heading1.innerHTML = 'KHADAEN KHY KHUTS KHARAMAT SENJU';
//     heading1.style.fontFamily = 'Anurati';
//     heading1.style.backgroundColor = 'black';
//     heading1.style.color = 'white';
//     heading1.style.letterSpacing = '0.5rem'
// });

// document.getElementById('box').innerHTML = 'Yowaimo';
// console.log("Yowaimo");


// document.querySelectorAll('li').style.color = 'white';
// lists.style.color = 'blue';

// var hd2 = document.querySelectorAll('h2');
// console.log(hd2);    //Nodelist

// hd2[1].innerHTML = 'Ariii';

// let boxes = document.getElementById('box');
// boxes.innerHTML = '<h1>hahahaha</h1>';
// boxes.textContent = '<h1>hahaha</h1>';

// let btns = document.querySelector('button');

// btns.addEventListener("click",function(){
//     // console.log("Hello");
//     boxes.style.backgroundColor = 'blue';
// })

// function colorbox(){
//     console.log("function runnning...");
//     boxes.style.backgroundColor = 'blue';
//     boxes.style.borderRadius = '50%';
// }

// btns.addEventListener('click',colorbox);

