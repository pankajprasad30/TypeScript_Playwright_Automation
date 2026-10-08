// while loop
// Do-while loop
// For loop

// What is loop : iteration or repetation, block of statement which repeat multiple times.

// While loop execute as loong as condition is true.

/* 

while (condition)
{
    //  statement
}

 */

// Example 1: print 1 to 10 number using while loop.

let i:number = 1 // initialization

while (i <= 10) // t t t  ....f
{
    console.log(i) // 1 2 3....
    i++  //2 3 4.... 11
}

console.log("###################################")
// Example 2: print even number between 1 to 10 number using while loop.


let even:number = 1
while(even <= 10)
{
    if (even % 2 == 0){
        console.log(even)
    }
    even++

}




console.log("###################################")
// Example 3: print odd number between 1 to 10 number using while loop.



let odd:number = 1
while(odd <= 10)
{
    if (odd % 2 != 0){
        console.log(odd)
    }
    odd++

}


console.log("###################################")
// Example 4: print 1 to 10 in desending order
let dec:number = 10

while(dec >= 1)
{
    console.log(dec)
    dec--

}





