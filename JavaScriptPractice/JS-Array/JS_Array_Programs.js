// 1. write a program to remove duplicate values from array.

var arr1 = [5, 6, 8, 12, 45, 6, 78, 12, 5, 6]
// output = [5, 6, 8, 12, 45, 78]

var output1 = []
for (var val of arr1) {
    if(!output1.includes(val)) {
        output1.push(val)
    } else {
        continue
    }
}
console.log("output result :", output1)
// [ 5, 6, 8, 12, 45, 78 ]


console.log("##########################################")
// 2. write a program to arrange and positive value left side and negative values right side from given array
var arr2 = [4, -6, 7, -2, 8, -10, 13, -12]
//output = [4, 7, 8, 13, -6, -2, -10, -12]

var posArr = []
var negArr = []
for(var m of arr2) {
    if (m > 0) {
        posArr.push(m)
    } else {
        negArr.push(m)
    }
}

console.log(posArr.concat(negArr))

// [
//    4,  7,   8,  13,
//   -6, -2, -10, -12
// ]