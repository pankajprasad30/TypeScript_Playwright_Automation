function addition(a: number, b:number){
    console.log(a+b)
}
addition(10,29)

function multiplication(p: number, q:number=60): void {
    console.log("multiplication :", p*q)
}

multiplication(5) // multiplication : 300
multiplication(6, 7) // multiplication : 42


// function with return types.
// get factorial of any given number

function getFactorial(num: number) : number {
    var fact = 1
    for (var i= num; i>0; i--) {
        fact = fact*i
    }
    return fact
}


var result = getFactorial(5)
console.log("Result :", result) // Result : 120

// #########################################
// #########################################
console.log("------- Arrow function ---------")

var ArrowOutput: any = (n:number) => {
    for(var i=1; i<10; i++) {
        console.log(n**i)
    }
}

ArrowOutput(5)

console.log("----------------")
function callBack(n: number, func: any) {
    func(n)
}
callBack(10, (n: number)=> {
    console.log(n**2)
})
// 100

function cube(a: number) {
    console.log(`cube of ${a}:`, a**3)
}

callBack(7, cube)