let arr = [[1,2,3,4], [3,5,2,6], [4,6,2,8]];
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        process.stdout.write(`${arr[i][j]}`);
    }
    console.log();
}

// Nested loop with as per the dimensions