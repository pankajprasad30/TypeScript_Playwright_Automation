let a:number = 10, b:number = 30

// Arithmatic Operator
console.log("******************** Arithmatic Operator **********************")
console.log("addition: ", a+b)
console.log("subtraction: ", b-a)
console.log("multiplication: ", a*b)
console.log("division: ", b/a)
console.log("remainder: ", a%b)
console.log("exponentiation: ", 5**2)



// Assingment Operator
console.log("******************** Assingment Operator **********************")

a = 10
b = 5

// a +=b        //a = a+b
//console.log(a)
console.log(a += b) // 15
console.log(a -= b) // 10
console.log(a /= b) // 2
console.log(a *= b) // 10
console.log(a %= b) // 0



// Relational/Comparison Operator
console.log("*********** Relational/Comparison Operator *************")

// Note * : Result in boolean

a = 10, b = 20

console.log(a > b) // flase
console.log(a < b) // true
console.log(a >= b) // flase
console.log(a <= b) //true
console.log(a == b) // false
console.log(a != b) // true



// Difference between     == (double equal)    and     === (strict equal)
console.log("*********** Difference between ==   === *************")
let num1:any = 10 // number type
let num2:any = "10" // string type

console.log(num1 == num2) // true (because only it compares value)
console.log(num1 === num2) // flase (because it compares value with type)


// Logical Operator:
// Return type :boolean --> true/false 

//  b1         b2          &&         ||         !
//.................................................
//  true       true        true       true      reverse vaue (true --> false)
//  true       false       false      true
//  false      true        false      true
//  false      false       false      false

console.log("*********** Logical Operators *************")

let b1:boolean = true
let b2:boolean = false

console.log(b1 && b2) // false
console.log(b1 || b2) // true
console.log(!b1) // false
console.log(!b2) // true

console.log("#####################")
// Combination or relational and logical operators
// relational : > < etc
// logical : true false

console.log(10 > 5 && 22 < 10) // false
console.log(10 > 5 && 22 < 30) //true