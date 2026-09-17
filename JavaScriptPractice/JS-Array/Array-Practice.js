/*
1. Array can contain different types of data.
2. Array follows both positive and negative indexing like string.
3. Array is mutable data type, means which can be modified and update.

*/

//          0   1      2         3               4      5            6     7           8
let arr1 = [20, 11.2, 'Pankaj', "Pankaj Prasad", true, [23, 12, 26], null, undefined, {a: 123, b: 234}]
//         -9   -8     -7        -6              -5     -4           -3    -2          -1

console.log("Array output: ", arr1)
console.log("Array output of index 2: ", arr1[2]) // Pankaj
console.log("Array output of index 8: ", arr1[8]) // { a: 123, b: 234 }
console.log("Array output of child index of 5: ", arr1[5][0]) // 23
console.log("Value of object: ", arr1[8]['a']) // 123


console.log("#############################################")
// Apply loop on Array.
for(var a of arr1){
    console.log(a)
}

console.log("#############################################")
// Get each value of array using in operator.
for(var v1 in arr1){
    console.log(v1, "|", arr1[v1])
}


console.log("#############################################")
// Negative indexing is applicable for slice method only.
console.log(arr1.slice(0, 6)) // [ 20, 11.2, 'Pankaj', 'Pankaj Prasad', true, [ 23, 12, 26 ] ]
console.log(arr1.slice(-5, -1)) // [ true, [ 23, 12, 26 ], null, undefined ]
// Note * : Last index is skipped.


console.log("################# Array Methods ########################")
// push method: this method add value at end of array.
var arr2 = [2, 4, 6, 8, 11, 66]
arr2.push(100)
console.log(arr2)

// add multiple value
arr2.push(4, 6, 80)
console.log("arr2: ", arr2)

// arr2:  [
//    2,   4, 6, 8, 11,
//   66, 100, 4, 6, 80
// ]


console.log("########################")
//unshift() : This method add values at beginning of array.
var arr3 = [5, 7, 8, 9, 10]
arr3.unshift(77)
console.log(arr3) // [ 77, 5, 7, 8, 9, 10 ]

arr3.unshift(88, 99, 100)
console.log("arr3 :", arr3)

// arr3 : [
//   88, 99, 100, 77, 5,
//    7,  8,   9, 10
// ]


console.log("########################")
// pop method : remove values from end of the array.
// it will remove value from array and return, that we can store in variable and use it.
var arr4 = [ 88, 99, 100, 66, 5]
var removedValue = arr4.pop()
console.log("removed value :", removedValue) // removed value : 5
console.log("arr4 :", arr4) //  [ 88, 99, 100, 66 ]


console.log("########################")
// shift method : remove values from beginning of array.
var arr5 = ['a', 'b', 'c', 'd', 4, 5, 6]
var temp = arr5.shift()
console.log("temp :", temp) // a
console.log("arr5 :", arr5) // [ 'b', 'c', 'd', 4, 5, 6 ]


console.log("########################")
// splice method : method help us to remove or add value to the array as per index value.
// splice(index, delete Count, values to add)

var arr6 = [5, 7, 8, 2, 15, 18, 12]
// remove 3 three value 2 index and add 2 new value.
arr6.splice(2, 3, 50, 100)
console.log("value arr6:", arr6) // value arr6: [ 5, 7, 50, 100, 18, 12 ]

var arr7 = [35, 57, 58, 52, 15, 18, 12]
// add 1 value and without delete any value
arr7.splice(4, 0, 200)
console.log("value arr7:", arr7)
// [
//    35, 57, 58, 52,
//   200, 15, 18, 12
// ]

arr7.splice(-2, 0, 100)
console.log("value arr7 :", arr7)

// value arr7 : [
//    35, 57,  58, 52,
//   200, 15, 100, 18,
//    12
// ]


arr7.splice(10, 2, 900)
console.log(arr7)

//[35,  57, 58, 52, 200, 15, 100, 18, 12, 900]


console.log("#####################################")
// includes method : this method return of values is available in the array.
var arr8 = [99, 22, 17, 18, 28]
console.log("check 100 is available or not :", arr8.includes(100)) // false
console.log("check 18 is available or not :", arr8.includes(18)) // true


console.log("#####################################")
// index of method : this method provide index of any value.

var arr9 = ['Hello', 'we', 'are', 'learning']
console.log("index of 'are':", arr9.indexOf('are')) // 2
// if value is not available in the array it will return -1
console.log("index of 'python':", arr9.indexOf('Python')) // -1


console.log("#####################################")
// concate two array and create new array.
var a = [5, 6, 7]
var b = [55, 77, 88]
var result = a.concat(b)
console.log("result :", result)
// [ 5, 6, 7, 55, 77, 88 ]

console.log("#####################################")
// slice method : this method return sub array from given array values.
// slice(start index, end index)
// The output will include the start index value and exclude end index value.

var p = [10, 20, 30, 40, 50, 11, 33, 44, 55]
console.log(p.slice(2, 7)) // [ 30, 40, 50, 11, 33 ]
console.log(p.slice(-5, -1)) // [ 50, 11, 33, 44 ]
console.log(p[2], p[7]) // 30 44