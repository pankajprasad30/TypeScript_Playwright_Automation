// Operators
/*
1. Mathematical Operators.
-> a. Addition Operator
-> b. Subtraction Operator
-> c. Multiplication Operator
-> d. Division Operator
-> e. Remainder Operator (Modulus)
-> f. Exponential Operator

*/

/*
2. Comparision Operators.
-> a. ==  : equal Operator
-> b. === : strict equal operator
-> c. !=  : not equal perator
-> d. !== : strict not equal perator
-> e. >   : greater than operator
-> f. <   :  less than operator
-> g. >=  :greater tahn or equal to
-> h. < = : less tahn or equal to

*/

/*
3. Logical Operators.
-> a. &&  : and Operator
-> b. ||  : of operator
-> c. !   : not perator

*/

/*
4. Unary Operators-
-> a. ++  : increment Operator
-> b. --  : decrement operator

*/


console.log("##################### Mathematical Operators ###############################")
//-> a. Addition Operator
var a = 20
var b = 30
console.log(a+b) // 50

//-> b. Subtraction Operator
var c = 40
var d = 70
console.log(b-c) // -10

//-> c. Multiplication Operator
var e = 5
var f = 10
console.log(e*f) // -50

//-> d. Division Operator
var g = 20
var h = 5
console.log(g/h) // 4

//-> e. Remainder Operator
console.log(g%3) //2

//-> f. Exponential Operator
console.log(2**2) // 4
console.log(3**3) // 27


console.log("##################### Comparision Operators ###############################")

// -> a. ==  : equal Operator
var a = 70
var b = '70'
var c = 50
console.log(a==b) // true
console.log(b==c) // false
// becuase it check data only not data type.

// -> b. === : strict equal operator
console.log(a===b) // false
console.log(50===c) // true

// -> c. !=  : not equal perator
var x = 50
var y = '50'
var z = 60
console.log(x!=y) // false
console.log(x!=z) // true

// -> d. !== : strict not equal perator
console.log(x!==y) // true
console.log(x!==z) // true

// -> e. >   : greater than operator
var p = 500
var l = 50
console.log(l>p) // false

// -> f. <   :  less than operator
var m = 500
var k = 50
console.log(k<m) // true

// -> g. >=  :greater tahn or equal to
console.log(l>=m)
// -> h. < = : less tahn or equal to
console.log(l<=k) // true


console.log("##################### Unary Operators ###############################")
// -> a. &&  : and Operator
var r = 40
var t = 50
var y = 60
console.log(r>t && t>y) // false
console.log(r<t && t>y) // false
console.log(r>t && t<y) // false
console.log(r<t && t<y) // true

// -> b. ||  : of operator
console.log(r>t || t>y) // false
console.log(r<t || t>y) // true
console.log(r>t || t<y) // true
console.log(r<t || t<y) // true

console.log("################")
// -> c. !   : not perator
console.log(!(r>t)) // true
console.log(!(r<t)) // false


console.log("##################### Logical Operators. ###############################")

// -> a. ++  : increment Operator
// -> b. --  : decrement operator

var v = 200
v += 15
console.log(v)

var v = 200
v -= 15
console.log(v)

var v = 200
v *= 15
console.log(v)

var v = 200
v /= 15
console.log(v)