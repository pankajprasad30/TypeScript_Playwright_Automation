
function getFactorial(num: number) : number {
    var fact = 1
    for (var i= num; i>0; i--) {
        fact = fact*i
    }
    return fact
}


var result = getFactorial(5)
console.log("Result :", result)