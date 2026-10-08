// For loop: Used when number of iteration is known.

/* 
Syntax:

for (initialization; condition; inc/dec)
{
     // Statements
}

// first intialization only once--> condition-->statement-->inc/dec-->condition-->statement-->inc/dec .......
*/


// Example 1 : print 1 to 10
for(let i=0; i<=10; i++)
{
    console.log(i)
}

console.log("########################################")
// Example 2 : print even number between 1 to 10
for(let i=2; i<=10; i+=2)
{
    console.log(i)
    
}

console.log("########################################")
for(let i=1; i<=10; i++)
{
   if(i % 2 == 0)
   {
       console.log(i)
   }
    
}


console.log("########################################")
// Example 3 : print 10 to 1

for(let i = 10; i >=0; i--) // 9,
{
    console.log(i) // 10, 9, .... 0
}


console.log("_______________________")
// Example 3 :

let y:number // i global
for(y=0; y<=5; y++) // if let i then its local
{
    console.log(y) // 5
}
console.log(y) // 6



console.log("_________*****______________")


let q:number
for(q = 0; q <=5; q++);
console.log(q) // 6




