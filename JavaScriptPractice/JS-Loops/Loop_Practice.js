/*
for (initialization; condition; increment/decrement){
    code block
}  
*/

for(var i=1; i<=10; i++){
    console.log(i)
}

// 1. Reverse the value
for (var i=10; i>=0; i--) {
    console.log(i)
}

console.log("################################################")
// 2. Print table of given number.

var num = 5
for (var j=1; j<=10; j++) {
    console.log(j, "*", num, "=", j*num)
}

console.log("################################################")
// 3. Write a condition with if condition.
// get all the numbers which is divisible by 3 and 5 from 1 to 100.

for(var i=1; i<=100; i++){
    if(i%3 == 0 && i%5 ==0)
       console.log(i)
}


console.log("################################################")
// 4. WAP to get factorial of given number.
////////////////////////////////// Need to finish it/////////////////