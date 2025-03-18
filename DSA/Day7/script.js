// for(let i=1;i<=5;i++){
//     console.log("*");
// }

process.stdout.write("* ");
process.stdout.write("* ");
process.stdout.write("* ");
process.stdout.write("* ");
process.stdout.write("* ");


for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        process.stdout.write(" * ");
    }
    console.log();
}

