/*
1. for loop
2. while loop
3. do-while loop
4. for-of loop
5. for-in loop
*/


console.log("############################ for loop #############################")
// 1. Print numbers from 1 to 10 (Basic for)
for(var i = 0; i <= 10; i++){
    console.log(i)
}

// 2. Print numbers from 10 to 1 (Reverse loop)
for(var i = 10; i>0; i--){
    console.log(i)

}

// 3.  Print even numbers (Loop with if)
for(let i = 0; i<= 30;i ++){
    if(i%2 == 0){
        console.log(i)
    }
    
}

// 4. Print odd numbers (Loop with if)
for(let i = 0; i<= 30;i ++){
    if(!(i%2) == 0){
        console.log(i)
    }
    
}

// 5. Sum of numbers from 1 to 10
let sum = 0
for(let i = 0; i<=10; i++){
    sum = sum + i
}
console.log(sum)

// 6. Multiplication table of 5
for(let i = 1; i <=10; i++){
    console.log("5 *",i,"=", i * 5)
}

// 7. Nested loop: Print square pattern

// let row = ""
// for(var i=1; i<=5; i++){
//     row = row + "@ "
// } 
// console.log(row)

for(let i=1; i<=3; i++){
    let row =""
    for(let j=1; j<=3; j++){
        row = row + "* "

    }
    console.log(row)
}

// 8. Nested loop: Number pattern

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}

let count = 1;
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += count + " ";
    count++; // Increment the number for the next position
  }
  console.log(row);
}


console.log("############################ while loop #############################")
// 9. while loop: Print 1 to 5

let i = 1
while(i<=5){
    console.log(i)
    i++
}

// 10. while loop: Sum of first 5 numbers
let i = 1
var sum1 = 0
while(i<=5){
    //console.log(i)
    sum1 += i
    i++
}
console.log(sum1)


console.log("############################ for-in loop #############################")

let person = {
    name: "Pankaj Prasad",
    age: 39,
    city: 'Bangalore'
}
for(let value in person){
    console.log(value, ": ", person[value])
}



console.log("############################ for-of loop #############################")

const message = "hello"
for(const char of message){
    console.log(char);
    // without ; --> SyntaxError: Unexpected end of input
}








