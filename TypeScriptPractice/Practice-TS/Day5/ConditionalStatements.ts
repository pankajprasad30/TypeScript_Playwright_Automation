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

// Switch case statement :

/* 
Syntax:

 switch (expression) {
    case value 1:
        // statement 1
        break;
    case value 2:
        // statement 2
        break;
    case value n:
        // statement n
        break;
    default :
        //
 
 }


*/


// Example 5: Depending on the values of day, print the corresponding day of the week.

let day:number = 7

switch (day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
        
    default:
        console.log("Invalid day")
}

// Example 6: The switch statement can also include an expression
let x:number = 20, y:number = 11

switch(x-y) // Expression
{
    case 0 : console.log("Fesult zero")
             break
    case 5 : console.log("Result is Five")
             break
    case 10 :console.log("Result is Ten")
             break
    default: console.log('Result is something else')

}