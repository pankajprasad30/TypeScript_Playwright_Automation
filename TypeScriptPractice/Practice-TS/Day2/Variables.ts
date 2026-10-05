// TypeScript : Variables

// Types of variable in TS/JS: var    let     const
// Variable: Container which can hold/store some data.

/* 
    1. Scope
    2. Declaration/Value Assignment
    3. Re-declaration
    4. Re-initialization/Re-assignment
    5. Hoisting

*/

//  1. Scope: Fuctional scope vs Block scope
// Example 1: var (functional scope)
function varScope(){
    if(true){
        var msg = "Pankaj"
    }
    console.log(msg) // Pankaj

}
varScope() // way to call function

// Example 2: let and const (block scope)
function blockScope(){
    if(true){
        let msg = "Hello let"
        const greet = "Hello const"
        console.log(msg) // Hello let
        console.log(greet) // Hello const
    }
    //console.log(msg)// error
    //console.log(greet)// error
}
blockScope()


// Example 3: scope difference (Function vs Block scope)
function scopeDiff(){
    if(true){
        var num1 = 10
        let num2 = 20
        const num3 = 30
        console.log(num1) // 10
        console.log(num2) // 20
        console.log(num2) // 30
    }
    console.log(num1) // works
    //console.log(num2) // wrror
    //console.log(num3) //error
}
scopeDiff()

// 2. Declaration/Value Assignment
var x
console.log(x) // undefined

let y
console.log(y) // undefined

const z = 30 // it must be initialized at declaration
console.log(z)


// 3. Re-declaration







































































