// Do-while loop : It always execute at least once before exeduting the condition.

/* 

Syntax:

do 
{
   // Statement
} while (condition)

*/

// Example 1: Print 1 to 5
let i:number = 10
do 
{
    console.log(i)
    i++
} while (i <= 5)

console.log("#######################")
// Example 1: 10 to 1 devending order
let decendingOrder:number = 10
do
{
    console.log(decendingOrder)
    decendingOrder--

} while(decendingOrder >= 1)