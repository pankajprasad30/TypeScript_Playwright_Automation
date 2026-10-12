// function: block of code which will do some task and we call them by its name.

/* 
// Three types of function
1. Named Function
2. Anonymous Function
3. Arrow Function / Lambda Function
*/

// 1. Named Function
/* 
Syntax:
function functionName(Parameter): returntype
{
    // Block of code
}
function() // calling the function/invokin the function
*/


// Example 1: Named function with no parameter and no return type
function display(): void 
{
    console.log("Wellcome to TS")
}
display() //calling function


// Example 2: Named function with parameters and return type
console.log("###################")
function addNumbers(x: number, y: number): number
{
    return x+y

}
console.log(addNumbers(10, 20))
//console.log(addNumbers(10, 20, 30)) // compile time error

//let result = addNumbers(20, 30)
//console.log(result)


// Example 3: Named function with rest parameter
// Rest parameter don't restrict the number, if values that you can pass to a function.

/* function addNumber1(...nums:number[])
{
    let i;
    let sum:number = 0

    for(i = 0; i <nums.length; i++)
    {
        sum = sum + nums[i]
    }
    console.log("Sum of the rumbers: ", sum)
}

addNumber1(2, 3)
addNumber1(2, 3, 5)
addNumber1(2, 3, 7, 9, 10) */


console.log("#######$$$$$$$$############")
// Example 3: Named function with rest parameter - multiple types

function findElements (...elements:(number | string)[]): number // union type
{
    return elements.length

}
let result1 = findElements(3, 'Pankaj', 10, "22")
console.log(result1) // 4
console.log(findElements(3, 5, 6, 6, 8, 9, 10)) // 7
console.log(findElements(3, 5, 6, 6, 8, "Pankaj", 9, "Prasad", 10)) // 9
