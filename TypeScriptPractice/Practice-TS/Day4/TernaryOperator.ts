//Termanry or conditional operator

// ?:

// exp?: res1 : res2 // exp means--> condition

let a:number = 200
let b:number = 300

let result:number = (a>b) ? a:b
console.log(result) // 300

// Note* if result is false then b value will be printed


//WAP to print Adult or Minor
let personAge:number = 30
let res:string = (personAge>=18) ? "Adult" : "Minor"
console.log(res) // Adult


