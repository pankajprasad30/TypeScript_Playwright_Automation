//Q1: we have a fruit shop where all each fruit price is mentioned.
// write a program to calculate the total bill of fruit purchased by customer.

let fruits_with_price = {Apple: 50, Banana: 20, Mango: 70, watermelon: 80, lichi: 90, pineApple: 100, orange: 60, dragonfruit: 200}
let fruit_purchased =   {watermelon:5, Apple: 10, Mango:20,  Banana: 15}
var count = 1
var total_bill = 0
for (var fruit in fruit_purchased) {
    //console.log(fruit)
    var fruit_name = fruit
    var fruit_price = fruits_with_price[fruit]
    var fruit_quant = fruit_purchased[fruit]
    var fruit_bill = fruit_price * fruit_quant
    total_bill = total_bill + fruit_bill
    console.log(count,".", fruit_name, fruit_price, fruit_quant, fruit_bill)
    count += 1
}
console.log("Total bill :", total_bill)




console.log("-------------------------------")
var obj1 = {a: 100, b: 300, c: 400}
for(var p in obj1){
    console.log(p, obj1[p])
}


console.log("---------------------------")
//Q2 : write a program to get square of all even values in the object

var obj2 = {x: 3, y: 4, z: 7, xx: 8, yy:11}
for(var a in obj2){
    if(obj2[a]%2 == 0){
        console.log(a, obj2[a]**2)
    }
}

console.log("---------------------------")
//Q3 : write a program to remove all null values from object.

const userDetail = {
    name: "Rahul",
    age: 25, 
    city: null,
    email: null,
    address: "Delhi"
}

const output = {}

for(var x in userDetail) {
    if(userDetail[x] != null) {
        output[x] = userDetail[x]
    }
    //console.log(output)
}

//console.log(output[x])
console.log(output)
// { name: 'Rahul', age: 25, address: 'Delhi' }



console.log("------------------------------------------")
//Q4: write a program to get all values in array sort in ascending order.
// get expensive item from this list.

// var items = {jeans: 800, Tshirt: 900, jacket: 2000, cap: 500}
// for(var a1 in items){
//     console.log(items[a1])
// }

var items = {jeans: 800, Tshirt: 900, jacket: 2000, cap: 500};

// 1. Get all values in an array and sort them in ascending order
var sortedValues = Object.values(items).sort((a, b) => a - b);
console.log("Sorted values in ascending order:", sortedValues); 
// Output: [ 500, 800, 900, 2000 ]

// 2. Get the most expensive item from the list
var mostExpensiveItem = Object.keys(items).reduce((a, b) => items[a] > items[b] ? a : b);
console.log("Most expensive item:", mostExpensiveItem, "costing", items[mostExpensiveItem]); 
// Output: Most expensive item: jacket costing 2000