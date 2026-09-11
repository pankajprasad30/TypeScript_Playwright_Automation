// usage of the function.
/*
- function is reusable block of code that can be called multiple times in a program.
- function can take input parameters and return output values.
- function can be defined using the function keyword or using arrow function syntax.
- Function can be used to organize code into smaller, manageable pieces.
- Function can be used to implement modular programming and improve code readability.
*/

// Addition = functip name
// p1, p2 : parameters to the function.
function Addition(p1, p2) {
    console.log("Addition outpur: ", p1+p2)
    
}
// Provide value for p1 and p2 parameter.
// p1=40, p2=50
Addition(40, 50) // Call function and called as pass by value.
Addition(100, 200)
Addition(700, 900)
Addition(10) // NaN

// Pass by reference.
var x = 20
var y = 30

// p1=x , p2=y
Addition(x,y)

console.log("#######################################")
for(var i=1; i<10;i++){
    Addition(x, y+i)
}


console.log("#######################################")
// Function without parameters.
function greeting() {
    console.log("Good Morning")
}

greeting()

console.log("#######################################")
// Function with default parameters value.

function multiplication(n1, n2=30) {
    console.log("n1: ", n1)
    console.log("n2: ", n2)
    console.log("Multiplication: ",n1*n2)
}
multiplication(5) // Multiplication:  150, Default value it took from n2=30.
/*
n1:  5
n2:  30
Multiplication:  150
*/

// n1=7 and over-ride default value of n2 = 70.
multiplication(7, 70)
/*
n1:  7
n2:  70
Multiplication:  490
*/

console.log("#######################################")
// Function with return value.
// When function return any value, then we can story the value in a variable and use it.

function factorial(num) {
    var fact =1
    for(var i=num; i>0; i--) { // i = 5, 4, 3, 2
        fact = fact*i // 1*5 = 5| 5*4 = 20 | 3*20 = 60 |  60*2 = 120 | 120*1 = 120
    }
    return fact
}


var output = factorial(5)
console.log("output : factorial of 5 :", output)

console.log("ad value to factorial :", 100 + output) // 220


console.log("#######################################")
// arrow function : this is anonymous function, that helps to declare the fuction without its name.
/*
(param) => {
    code block
    }

*/

var result = (n) => {
    console.log(`square of ${n}:`, n**2)
}

result(12) // square of 12: 144
result(15) // square of 15: 225


var result2 =(arr)=> {
    // print square of each eval value of array.
    for(var v of arr){
        if(v%2 ==0) {
            console.log(v**2)
        }
    }
}

result2([5, 7, 8, 2, 4, 5, 6])

console.log("####################################")
// Call back function: When we call the function as parameter to another function.


function CallBackFunction(n1, n2, func) {
    func(n1, n2)
}

// creata custom function and provide as parameter to another function
function add(v1, v2) {
    console.log("addition :", v1+v2)
}
CallBackFunction(10, 20, add)
console.log("#############################")

// specify array function as a parameter
CallBackFunction(50, 7, (l1, l2)=> {
    console.log("multiplication  :", l1*l2)
}) 
// multiplication  : 350