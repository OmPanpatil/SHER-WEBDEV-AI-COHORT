// Local storage, Session storage, cookies
// window, object
// Child notes
// class list

console.log(window); // window is the global object in the browser. 

let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    // console.log("hello");
    location.href = "https://www.sheryians.com/";
    // location.reload();
});

// Browser Object Model (BOM) - window, location, history, navigator, screen

var a = location.href;
console.log(a);

var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', function(){
    history.back();
})
btn2.addEventListener('click', function(){
    history.forward();
})

// var arr = [1,4,5,6,3];

// Cookies

// document.cookie = ;


