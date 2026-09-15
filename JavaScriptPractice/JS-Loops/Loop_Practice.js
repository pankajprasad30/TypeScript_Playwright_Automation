/*
for (initialization; condition; increment/decrement){
    code block
}  
*/

for(var i=1; i<=10; i++){
    console.log(i)
}

// 1. Reverse the value
for (var i=10; i>=0; i--) {
    console.log(i)
}

console.log("################################################")
// 2. Print table of given number.

var num = 5
for (var j=1; j<=10; j++) {
    console.log(j, "*", num, "=", j*num)
}

console.log("################################################")
// 3. Write a loop with if condition.
// get all the numbers which is divisible by 3 and 5 from 1 to 100.

for(var i=1; i<=100; i++){
    if(i%3 == 0 && i%5 ==0)
       console.log(i)
}


console.log("################################################")
// 4. WAP to get factorial of given number.
//  5 = 5*4*3*2*1
var x = 5
var fact = 1
for(var i=x; i>0; i--)
{
    fact *= i // fact = fact * i
}
console.log(fact) // 120
// 1*5 = 5 | 5*4 = 20| 20*3 = 60 | 60*2 = 120 | 120*1 = 120

// Note* : Need to practise bellow code.
console.log("################################################")
// 5. Nested for loop

// in nested for loop, for single value outer loop
// complete inner loop will executes
/*
// Outer loop
for (initialize, condition, increment/decrement){
    // Inner loop
     for (initialize, condition, increment/decrement) {
        code block
     }

}
*/

for(var i = 1; i<=5; i++) { // i = 1
    console.log("address :i :", i)
    for(var j=1 ; j<=3; j++) {
        console.log("item : j:", j)
    }
    console.log("---------")
}

console.log("##########################################")
// write a program to get all prime number from 1 to 100
// prime number : the number is divisible by 1 or number itself.

for(var num=2; num<=100; num++) { // 2, 3, 4, 5, 6
    var prime=true
    for (var i=2; i<num; i++) { // (2, 3, 4, 5)
        if(num%i == 0) { // 6%2 ==0, 
            prime = false
        }
    }

    if(prime == true) {
        console.log(num) // 2, 3, 5
    }
}



console.log("################################")
/*
*
* *
* * * 
* * * *
* * * * *
* * * * * *
*/

for(var i=1; i<=6; i++) { // i=1, 2
    var temp = ""
    for(var j=1; j<=i; j++) { //j=(1, 1) (1, 2)
        //temp = temp +" "+j // * *
        temp = temp +" * "
    } 
    console.log(temp)
}

console.log("#######################")
// Reverse the star pattern.

for(var i=6; i>=1; i--) { // i=1, 2
    var temp = ""
    for(var j=1; j<=i; j++) { //j=(1, 1) (1, 2)
        temp = temp +" "+j // * *
        //temp = temp +" * "
    } 
    console.log(temp)
}


console.log("#################################")
/*
* * * * * * i=1
*         * i=2
*         * i=3
*         * i=4
*         * i=5
* * * * * * i=6
*/

for(var i=1; i<=6; i++) {
    var temp =""
    for(var j=1; j<=6; j++) {
        if (i == 1) {
            temp = temp + " *"
        } else if (i==2) {
            if(j == 1 || j == 6) {
                temp = temp + " *"
            } else {
                temp = temp + "  "
            }
        } else if(i ==3) {
            if(j == 1 || j == 6) {
                temp = temp + " *"
            } else {
                temp = temp + "  "
            }

        }
        else {
            temp = temp + " -"

        }   
    }
    console.log(temp)
}







/*
for(var i=1; i<=6; i++) {
    var temp =""
    for(var j=1; j<=6; j++) {
        if(i == 1 || i == 6) {
             temp = temp + " *"
        } else if (i >1 && i<6) {
            if (j> 1 && j <6) {
                temp = temp + "  "
            } else{
                 temp = temp + " *"
            }
        }
        else {
            temp = temp + " -"
        }
       
    }
    console.log(temp)
}

*/

/*

* * * * * * *
      *
      * 
      * 
      * 
      *  
    

*         *
*         *
*         *
*         *
* * * * * *

*/