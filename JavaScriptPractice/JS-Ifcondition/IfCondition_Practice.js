/*
// If-else condition 
// Basic syntax of if-else condition

if (code1){
    code block 
} else {
    code block

    }

*/

// Q1:  WAP to compare two variable values.
var a = 20
var b = 40

if (a == b) {
    console.log("Both a and b have equal value: ", a, b)
} else{
    console.log("a and b have different value: ", a, b)
}

console.log("###########################################################")
// Q2:  WAP to check given number is even or odd.

var x = 20

if (x%2 == 0){
    console.log("Given number x is even: ", x)

} else {
    console.log("Given number x is odd: ", x)
}

console.log("###########################################################")
// Q3:  WAP to check given number is divisible by 3 and 5.

var w = 30

if (w%2 == 0 && w%5 == 0){
    console.log("Given number is divisible by both 3 and 5: ", w)
} else{
    console.log("Given number is not divisible by both 3 and 5: ", w)
}


/*
// If-else-if condition 
// Basic syntax of If-else-if condition

if (code1){
    code block 
} else if (cond2) {
    code block
} else if (cond3) {
    code block
}

*/

console.log("###########################################################")
// Q1:  WAP to find greater number among three values.
 
var p = 400
var q = 300
var r = 700

if (p > q && p > r){
    console.log(" p has creater value: ", p)
} else if(q > p && q > r) {
    console.log("q has greater value: ", q)
} else if (r > p && r > q) {
    console.log("r has greater value: ", r)
} else {
    console.log("None of them have greater value")
}


console.log("###########################################################")
// Q2:  WAP and get student grade on basis of marks optained.

var marks = 55

if (marks <= 40) {
    console.log("Failed in exam.")
} else if (marks > 40 && marks <= 50) {
    console.log ("Passed with c crade.")
} else if (marks > 50 && marks <=70) {
    console.log("Passed with B grade.")
}else if (marks > 70 && marks <=90) {
    console.log("Passed with A grade.")
}else if(marks > 90 && marks <= 100) {
    console.log("Passed with Excellent grade")
} else {
    console.log("Invalid marks")
}


/*
// Nested-if condition 
// Basic syntax of Nested-if condition

if (cond1){
    if (cond2){
        code block
        if (code3){
            code block
        } else{
            code block
        }
    } else {
        code block
    }
} else{
    code block
}

*/

console.log("#########################################################")
 // WAP to simulate interview process with the help of nested if condition.

var round1 = "pass"
var round2 = "fail"
var round3 = "fail"

if (round1 == "pass"){
    console.log("Congrates your 1st round is cleared.")
    if (round2 == "pass") {
        console.log("Congrates your 2st round is cleared.")
        if (round3 == "pass") {
            console.log("Congrates your 3st round is cleared.")
        } else {
            console.log("Failed in 3rd round.")
        }
    } else {
        console.log("Failed in 2nd round.")
    }
} else {
    console.log("Failed in 1st round")
}


console.log("#########################################################")
console.log("If condition with ternary operator")
// ? : ternary operator provides you output in terms of true or false.
// output = cond ? true : false 
var num = 11
var output = num%2 == 0? "even" : "odd" 
console.log(output)

// write a program to get sqaure of num if it is divisible by 3 else print cube.
var n1 = 8
var output2 = n1%3 == 0 ? n1**2 : n1**3
console.log("Output2 :", output2) // Output2 : 512