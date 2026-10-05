// Increment ++
// Decrement --

let x:number = 30
//x = x+1
// x++   // with this x value will be increment by 1 // called as post increment
// console.log(x) // 31

// ++x // pre-increment
// console.log(x) // 31

let res:number = x++ // post-increment
console.log(res) // 30 
// why its not 31 ? because in this case first x value will be assignet to res, then it will increment
console.log(x) // 31


let y:number = 30
let res2:number = ++y // pre-increment // in this pist increment then value will be assigned.
console.log(res2) // 31

console.log("########################################")
// Decrement --

let y1:number = 30
let res3:number = y1-- // post-decrement
console.log(res3) // 30
console.log(y1) // 29


let y2:number = 30
let res4:number = --y2 // pre-decrement
console.log(res4) // 29
console.log(y2) // 29