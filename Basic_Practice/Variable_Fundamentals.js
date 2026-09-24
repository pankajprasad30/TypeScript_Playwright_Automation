// Types of variable in JavaScript:
// 1. var
// 2. let
// 3. const

var a = 20
// var : types of variable
// a : variable name
// = : assignment operator
// 20 : valuewhich is assigned to variable name

/* 
1. Properties of var variable:
-> it can be re-declare
-> it can be re-assigned
-> it can be defined with initialization
-> it has function scope.

*/ 

/* 
2. Properties of let variable:
-> it can not be re-declare
-> it can be re-assigned
-> it has block scope.

*/ 

/* 
3. Properties of const variable:
-> it can not be re-declare
-> it can not be re-assigned
-> it has block scope.

*/ 

console.log("##################### var variable ###############################")
// -> it can be re-declare
var a1 = 30
var a1 = 40
console.log(a1) // 40

// -> it can be re-assigned
var b1 = 20
b1 = 60
console.log(b1) // 60

// -> declare without initialization
var c1 // its not giving error but result is 
console.log(c1) // undefined

// -> it has function scope.
if(true){
    var c = 50
    console.log(c) // 50
}
console.log(c) // 50



console.log("##################### let variable ###############################")
// -> it can not be re-declare
let a = 10
// let a = 20 // it giving error
console.log(a) 

// -> it can be re-assigned
let b = 40
b = 50
console.log(b) // 50

// -> it has block scope.

if(true){
    let c = 50
    console.log(c) // 50
}
// console.log(c) // value is imited to inside of block only.




console.log("##################### const variable ###############################")
// -> it can not be re-declare
const q = 100
//const q = 200 // its giving error after writing code.
console.log(q) // 100

// -> it can not be re-assigned
const w = 200
// w = 300
console.log(w) // output error

// -> it has block scope.
if(true){
    const e = 400
    console.log(e)// 400
}
// console.log(e)// error in output