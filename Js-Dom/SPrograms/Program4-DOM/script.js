let btn = document.querySelector('button');
let percent = document.querySelector('#percent');
let growth = document.querySelector('#growth');

let grow = 0;

btn.addEventListener('click', function(){
    // percent.innerHTML = '100%';
    let chotabhai = setInterval(function(){
        // console.log(grow);
        grow++;
        percent.innerHTML = grow+'%';
        growth.style.width = grow+'%';
    }, 50);

    setTimeout(function(){
        clearInterval(chotabhai);
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = '0.5';
    }, 5000);         //50*100 = 5000

})