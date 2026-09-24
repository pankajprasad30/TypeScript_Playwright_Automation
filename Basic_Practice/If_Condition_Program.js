/*
 If condition practice:
✔ if
✔ if-else
✔ if-else if
✔ nested if
✔ one-line (ternary) conditions
*/

// 1. Positive number (if)
var a = 30
if(a>=0){
    console.log("Positive number")
}

// 2. Even or odd (if-else)
var b = 5
if(b % 2 == 0){
    console.log("Even number", b)
} else{
    console.log("Odd number", b)
}

// 3. Voting eligibility (if-else)
let age = 17
if(age>=18){
    console.log("Eligible for vote: ", age)
} else{
    console.log("Not eligible for vote: ", age)

}

// 4. Largest of two numbers (if-else)
let a = 20, b = 30
if(a > b){
    console.log("A is greater:", a)
} else{
    console.log("b is greater:", b)
}

// 5. Divisible by 3 (if)
let num = 31
if(num % 3 === 0){
    console.log("num is divisible 3")
}
console.log("num is not divisible by 3")

// 6. Grade system (if-else if)

let marks = 90
if(marks >= 90){
    console.log("A")
} else if(marks >= 50){
    console.log("B")
} else if(marks >= 35){
    console.log("C")
} else{
    console.log("Fail")
}

// 7. Largest of three numbers (if-else if)
let a1 = 30, b1 = 85, c1 = 80
if(a1 > b1 && a1 > c1){
    console.log("a1 is largest")
} else if(b1 > a1 && b1 > c1){
    console.log("b1 is greater")
} else{
    console.log("c1 is greater")
}

// 8. Check number range (if)
let range = 55
if(range >= 20 && range <= 70){
    console.log("numper is within the range")
} else{
    console.log("not within the range")

}

// 9. Nested if (positive & even)
let num1 = 8
if(num1 > 0){
    if(num1 % 2 === 0){
        console.log("Number is positive and even")
    }
}
else {
    console.log("Number is not positive")
}

// 10. One-line if (ternary)
let num2 = 10
console.log(num2 > 0 ? "Positive" : "Not Positive")

// 11. One-line even/odd
let num3 = 47
console.log(num3 % 2 == 0 ? "Even" : "Odd")

// 12. One-line pass/fail
let num4 = 70
console.log(num4 >= 35 ? "Pass" : "Fail")