// var, let, const (There are three types of variable in JavaScript)

var a = 23
// var : type of variable
// a : variable name
// = : assignment operator
// 23 : value which is assignet to variable

//############################################

// single line comment

/*
Multi line Comment

==> Properties of var variable :-
1. It can be re-declared.
2. It can be re-assigned.
3. It can be defined without initialization.
4. It has function scope.
*/  

// Declaration of variable x and assign value 30
var x = 30
console.log("Value of x:", x) 

// Re-declare same variable
var x = 50
console.log("Value of x after re-declaration:", x)

// Re-assign value to same variable
x = 100
console.log("Value of x after re-assignment:", x)

// Decplare variable without initialization
var y
console.log("Value of y:", y)

// Note * : If we don't declable value to variable then it will be undefined.




console.log("############################################")
// let variables

/*
-> Let variable can re-assign value.
-> Let variable can not re-declare.
-> Let variable has block scope.
*/

// declare let variable and assign value
let z = 70
console.log("Value of z:", z)

// Re-assign value
z = 90
console.log("Value of z after re-assignment:", z)

// re-declare let variable
//let z = 100 // This will throw error because we can not re-declare let variable
//console.log("Value of z after re-declaration:", z)
//Identifier 'z' has already been declared

// it has block scope.
if(true) {
    // Note : Let variable block is limited to inside block.
    var a = 10
    let b = 20
    console.log("Value of a inside block:", a) // 10
    console.log("Value of b inside block:", b) // 20
}

console.log("Value of a inside block:", a) // 10
//console.log("Value of b inside block:", b) // 20
// This will throw error because b have block scope, Means value is limited in block only.



console.log("######################################################")
// const variables-- > More strict than let variable.

/*
-> Can not re-assign value to const variable.
-> Const variable can not re-declare.
-> Const variable has block scope.
*/

const j = 200
console.log("Value of j:", j)

// Re-declare value to const variable
// const j = 200 // This will throw error because we can not re-declare const variable
// console.log("Value of j:", j)

// Re-assign value to const variable
// j = 800 // This will throw error because we can not re-assign value to const variable
console.log("Value of j:", j)

if(true) {
    var q = 300
    let w = 400
    const e = 500
    console.log("Value of q inside block:", q) // 300
    console.log("Value of w inside block:", w) // 400
    console.log("Value of e inside block:", e) // 500
}
console.log("Value of q inside block:", q) // 300
// we can not access outside of the block for let and const variable because they have block scope.
//console.log("Value of w inside block:", w) // 400
//console.log("Value of e inside block:", e) // 500


console.log("*********************** Rules for Declaring Variable Names *******************************")

// 1. Space is not allowed in variable name.
//var abc pwq = 20 // Invalid
//console.log("value of abc pwq:", abc pwq) // Invalid
var plm_wq = 40 // with underscore is valid.
console.log("value of plm_wq:", plm_wq)

//2. Variable can not start with numbers.
//var 12jk = 50 // Invalid
//console.log("value of 12jk:", 12jk) // Invalid
var jk12 = 60 // Valid
console.log("value of jk12:", jk12)

//3. Special character are not allowed in variable name except underscore _ and dollar sign $ .
var myVariable = 70 // Valid
console.log("value of myVariable:", myVariable)

var $myVariable = 80 // Valid
console.log("value of $myVariable:", $myVariable)

var my_Variable = 90 // Valid
console.log("value of my_Variable:", my_Variable)

// 4. Variable name are case ensitive.
var userName = "Pankaj"
var Username = "Prasad"
var UsERname = "Pankaj Prasad"
var userNAME = "Darshika"
console.log("value of userName:", userName)
console.log("value of Username:", Username)
console.log("value of UsERname:", UsERname)
console.log("value of userNAME:", userNAME)

console.log(userName, Username, UsERname, userNAME) // Pankaj Prasad Pankaj Prasad Darshika

// 5. Use camelCase for variable name. (First word is small and second word is capital letter)
var myName = "Pankaj"
var myFullName = "Pankaj Prasad"
var emailId = "pankaj@example.com"
console.log("value of myName:", myName)
console.log("value of myFullName:", myFullName)
console.log("value of emailId:", emailId)

//6. Can not use reserved keywords as variable name.
// let, var, const, if, else, for, while, function, return, break, continue, switch, case, default, try, catch, finally, throw, class, extends, super, import, 
// export, new, this, typeof, instanceof
