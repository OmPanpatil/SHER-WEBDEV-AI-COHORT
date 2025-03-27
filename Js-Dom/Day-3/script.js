// console.log('Hello');
// setTimeout(function(){
//     console.log('Delay hello');
    
// },3000)
// console.log('Hello');

// // setTimeout = delay

// setTimeout(function(){
//     console.log('Delay hello');
    
// },5000)
// // console.log('Hello');

let btn = document.querySelector('button');
let heading5 = document.querySelector('h5');
// let heading

let flag = 0;

btn.addEventListener('click', function(){
    if(flag == 0){
        heading5.innerHTML = 'Friends';
        btn.innerHTML = 'Unfollow';
        flag = 1;
    }
    // heading5.style.color = 'purple';
    // heading5.style.borderColor = 'white';
    else {
        heading5.innerHTML = 'Strangers';
        btn.innerHTML = 'Follow';
        flag = 0;
    }
})

