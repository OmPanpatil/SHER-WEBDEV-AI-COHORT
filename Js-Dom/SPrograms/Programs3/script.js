let arr = [
    {
        team: 'CSK',
        primarycolour : 'yellow',
        secondarycolour : 'Green'
    },

    {
        team: 'RCB',
        primarycolour : 'red',
        secondarycolour : 'black'
    },

    {
        team: 'MI',
        primarycolour : 'blue',
        secondarycolour : 'yellow'
    },

    {
        team: 'KKR',
        primarycolour : 'purple',
        secondarycolour : 'golden'
    },

    {
        team: 'SRH',
        primarycolour : 'orange',
        secondarycolour : 'black'
    }

]

// console.log(arr[0].team);

let btn = document.querySelector('button');
let heading2 = document.querySelector('h2');

btn.addEventListener('click', function(){
    // console.log("Heyy");
   let num = Math.floor(Math.random()*arr.length);
   let winner = arr[num];
   heading2.innerHTML = winner.team;
   heading2.style.backgroundColor = winner.primarycolour;
   heading2.style.color = winner.secondarycolour; 
})
