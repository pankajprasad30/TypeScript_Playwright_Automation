// Statements: 
// 1. Conditional / Decision making Statements
// 2. Looping / Iterative making Statements
//...................................................................


// if condition
/*

Syntax:
   if (condition)
       {
           // Statements
       }
 

*/

// voting eligibility
let age : number  = 19

if(age>=18){
    console.log("You are eligible for vote")
}



// if-else condition
/*

Syntax:
   if (condition)
       {
           // Statements
       }
    else
       {
            // Statements
        }

*/


// Print number is even or odd.
let num:number = 21
if (num%2 == 0){
    console.log(`${num} : Number is even`)
}
else {
    console.log(`${num} : Number is odd`)
}


// Nested if-else staement
/* 
Syntax:
   if (condition 1)
       {
           // Statements
       }
    else if (condition 2)
       {
            // Statements
        }
    else
        {
             // statement
        }

*/

// Example: Depending on marks, display appropriate prade.

let marks = 90
if (marks>=80 && marks <= 100){
    console.log("Grade A")
} 
else if(marks>=50 && marks<80){
    console.log("Grade B")
}
else if(marks>=35 && marks<50) {
    console.log("Grade C")
} 
else {
    console.log("Failed in Exam")
}

// Example 4: Browser selection
let browser: string = "safari"

if(browser === "chrome"){
    console.log("Browser is chrome")
}
else if(browser === "firefox"){
    console.log("Browser is firefox")
}
else if(browser === "safari"){
    console.log("Browser is safari")
}
else {
    console.log("Other browser")
}

// Switch case: 







