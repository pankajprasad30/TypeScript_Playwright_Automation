// A function is a block of code designed to perform a specific task. 
// It runs only when it is called (invoked).

// 1. Simple Function Example
function greet() {
    console.log("Hello Pankaj")  
}
greet()

// 2. Function with Parameters
function greetName(name) {
    console.log("Hello " + name)
}
greetName("Pankaj")

// 3. Function with Return Value
function add(a, b){
    return a + b
}
let result = add(5, 3)
console.log(result)

// 4. Function Expression
const multiply = function(a, b) {
    return a * b
}
console.log(multiply(4, 5))

// 5. Arrow Function (Modern Way)
const subtract = (a, b) => {
    return a - b
}
console.log(subtract(20, 5))


// 6. Default Parameters
function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet();        // Hello Guest
greet("Ram");   // Hello Ram

//  7. Function with Multiple Parameters
function userInfo(name, age, city){
    console.log(name, age, city)
}
userInfo("Pankaj", 39, 'Bangalore')