// Mathematical Operators

var a = 20
var b = 30
// + : Plus Operator
console.log("Addition: ", 100+200)
console.log("Addition of a + b : ", a+b)

// - : Subtraction Operator
console.log("Subtraction b-a: ", b-a)
console.log("Subtraction b-5: ", b-5)

// / : Division Operator
console.log("Division b / a: ", b/a)

// * : Multiplication Operator
console.log("Multiplication 20 * b:", 20*b)

// % : Remainder operator
console.log("Reminder: ", 20%3)

// ** : Exponential operator
console.log("Square of 2: ", 2 ** 2)
console.log("cube of 5: ", 5 ** 3)


console.log("#######################################################")
// Comparision Operator:

// ==  : equal operator (check data only not data type)
var a = 10
var b = "10"
var c = 50

console.log(a == b) // true
console.log(b == c) // false
// because its check data only not data type

// === : strict equal operator (check data as well as data type)
console.log("a === b", a === b) // false
console.log("50 === c", 50 === c)// true

// !=  : not equal to (check only data)
var x = 50
var y = "50"
var z = 60

console.log("x!= y", x != y) // false
console.log("x!= z", x != z) // true

// !== : not double equal (check data as well as data type)
console.log("x!==y", x!==y) // true
console.log("x!==z", x!==z) // true


// > : greater operator
var m = 60
var n = 80
var o = 80
console.log("m > n", m > n) // false

// < :  less than operator
console.log("m < n", m < n) //true

// >= : greater or equal operator
console.log("n >= o:", n >= o) //true

// <= :  less than equal operator
console.log("n <= o:", n <= o) //true

console.log("#########################################################")
// Increse and Decrease operator.

var p = 10
var q = 20

// += : increate existing value with any number
p += 15 // p = p + 15
console.log("output: p += 15: ", p) // 25

 // -= : decrease existing value with any number
 q -= 5 // q = q -5
 console.log("output: q -= 5: ", q) // 15

 // *= : multiply existying value by 10
 p *= 10 // p = p * 10 
 console.log("output: p *= 10: ", p) // 250

 // /= : divide existing value by 5
 p /= 5 // p = p /= 5
 console.log("Output: p /= 5: ", p)


 console.log("#########################################################")
 // logical operator:

 // && : and operator
 // cond1 and cond 2

 var x = 50
 var y = 60
 var z = 70
 // true && false : false
 console.log("y > x && y > z :", y > x && y > z) // false

 // false && true : false
  console.log("y > z && y > x :", y > z && y > x) // false

 // false && false : false
 console.log("y > z && x > z :", y > z && x > z) // false

 // true && true : true
  console.log("y > x && z > y :", y > x && z > y) // true



 // || : or operator
 // cond1 // cond2

var a = 50
var b = 60
var c = 70

 // true || false : true
 console.log("b > a || b > c:", b > a || b > c) // true

 // false || true : true
 console.log("a > b || c > a:", a > b || c > a) // true

 // true || true : true
 console.log("b > a || c > a:", b > a || c > a) // true

 // false || false : false
  console.log("a > b || b > c:", a > b || b > c) // false