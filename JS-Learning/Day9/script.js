// Arrays

console.log("Question 1 : Duplicate");

var arr = [1, 1, 2, 3, 2, 3, 5, 6, 5, 6];
var ans = [...new Set(arr)];
console.log(ans);

console.log("Question 2 : Sorting, uniqueness and indexing");

let arr1 = [5,4,6, 455, 655, 8];

// let ans1 = arr1.sort()

// var ans2 = []


console.log("Q.16 : Removes duplicate values from an array");

let rd = [1,1,1,3,4,5,4,5,3];

// first by set : Because when we apply new set(arrayname) it will always gives us an object and we want an array. So, we use [...new Set(arrayname)]; and now we get array values and here ... is spread operator. And also known as uniqueness.

let rdans = [...new Set(rd)];
console.log(rdans);

console.log("Q.17 : Find the second largest number in an array");

let slna = [1,5,5,3,3,2,4,2,4,6,7,456,765,765,890,458,231];

let slnans = [...new Set(slna)];
console.log(slnans);

let soslans = slnans.sort(function(a,b){
    return b-a;
});

console.log(soslans);

// Index

console.log(soslans[1]);


// First : Uniqueness
// Second : Sort array descending order
// Third : Indexing and we have to find here the second largest number i.e. 1st index

// console.log(".map, .sort, .forEach, .filter, .reduced : Pre or In-built Functions.");

// console.log("let slnaans = slna.sort(function(a,b){
//     return b-a;
// })

// console.log(slnaans);")

console.log("Q.18 : Sort an array in descending order");

let sa = [1,3,4,3,2,2,1,5];

let saanss = [...new Set(sa)];
let newsaanss = saanss.sort(function(a,b){
    return b-a;
})
console.log(newsaanss[1]);   //for indexing


console.log([...new Set(sa)].sort(function(a,b){
    return b-a;
}));

console.log("Q.19 : Reverse an array without using .reverse()");

let raa = [1,2,3,4,5,6,777];

let raa2 = [];

for(let i = raa.length-1; i>=0; i--){
    raa2.push(raa[i]);
}












