// While loop

var num = 1
while (num<=10){
    console.log(num)
    num += 1
}

// infinite loop
var n = 1
while(true){
    n += 1
    console.log(n)
    if (n == 10){
        break
    }
}


// do-while loop
console.log("################################################")
// Do while loop execute atleast once in the iteration.

var n1 = 1

do{
    console.log(n1)
    n1 += 1
} while(n1<10)

console.log("################################################")
// foreach loop : this loop with apply logic on each value of array

var arr1 = [2, 3, 4, 7]
arr1.forEach((a) => console.log(a**2))

console.log("################################################")
var arr2 = [3, 5, 7, 9]
var result = []

//get each value of arrey using for of loop
for (var c of arr2) {
    console.log(c, c ** 2)
    result.push(c**3)
}
// push is the method which helps to add value to array.
console.log("Cube result:", result) // [ 27, 125, 343, 729 ]


console.log("################################################")
// for in loop : it gets index of each value of array.
var arr3 = [44, 55, 66, 77]
for (var r in arr3) {
    console.log(r, arr3[r])
}

console.log("-----------------------")
for(var b=0; b<arr3.length; b++) {
    console.log(b, arr3[b])
}

console.log("#######################################################")
// Get each character from string using for of loop.
var s1 = "Pankaj Prasad"
console.log(s1.length)// 13
for(var chr of s1){
    console.log(chr)
}

// Reverse of string
console.log("###############################################")
var s2 = "Neha"
for(var i=0; i<s2.length; i++){
    console.log(s2[i])
}

console.log("###############################################")
var temp = ""
for (var i=s2.length-1; i>=0; i--){
    console.log(s2[i])
    temp += s2[i] // temp = temp + s2[i]

}

console.log(s2) //Neha
console.log(temp) //aheN

console.log("###############################################")
// Apply loop on object data type.
var userDetails = {name : "Pankaj", age: 39, email: "pankajprasad@gmail.com", phone: 1123123123}
console.log(userDetails)

for (var x in userDetails){
    console.log(x, ":", userDetails[x])
}