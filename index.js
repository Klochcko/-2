//Simple numbers
outerLoop:
for(let i = 2; i<=100; i++) {
    for(let j = 2; j <= Math.sqrt(i); j++) {
        continue outerLoop;
    }
}
console.log(i);