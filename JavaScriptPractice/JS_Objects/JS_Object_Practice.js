/*
- Object data type store values in key values pair {key : values}
- Object data type store uniques key, duplicate keys are not allowed.
- Object data type can store any type of data as values.
- Object data type is mutable in nature.
*/

var userDetails = { firstName: 'Pankaj', lastName: 'Prasad', age: 39, email: 'pankaj@gmail.com', phone: 999999999}
console.log(userDetails)

// Add property object
userDetails.city = "Bangalore"
console.log(userDetails)
/*
{
  first: 'Pankaj',
  last: 'Prasad',
  age: 39,
  email: 'pankaj@gmail.com',
  phone: 999999999,
  city: 'Bangalore'
}
*/

// Get data from object using key.
//1. get data using dot operation.
console.log(userDetails.firstName) // Pankaj

//2. get data using square bracket
console.log(userDetails['email']) // pankaj@gmail.com

// Update existing property
userDetails.age = "30"
console.log(userDetails)
/*
{
  firstName: 'Pankaj',
  lastName: 'Prasad',
  age: '30',
  email: 'pankaj@gmail.com',
  phone: 999999999,
  city: 'Bangalore'
}
*/

// Delete existing propery from object
delete userDetails.email
console.log(userDetails)
/*
{
  firstName: 'Pankaj',
  lastName: 'Prasad',
  age: '30',
  phone: 999999999,
  city: 'Bangalore'
}
*/

console.log("################################")
var  obj2 = {1: "45", 2: "55"}
console.log(obj2[1]) // 45


console.log("################################")
var obj3 = {
    a: [5, 7, 9],
    b: {emp: 'Pankaj', empID: 'PA-34551', empSalary: 500000, phone: 87612387, email: 'xyz@gmail.com' },
    c: "Hello all i am learning JavaScript"
}

console.log(obj3.b.phone) // 87612387
console.log(obj3.c.split(" ")) // [ 'Hello', 'all', 'i', 'am', 'learning', 'JavaScript' ]
console.log(obj3.c.split(" ")[4]) // learning


console.log("######################## Object methods ###########################")
console.log("-------------------------------")
// keys: get all keys from object
// values : get all values from object

var obj4 = {'a': 123, 'b': 234444, 'c': 345555555}
console.log("All keys: ", Object.keys(obj4)) // [ 'a', 'b', 'c' ]
console.log("All values: ", Object.values(obj4)) // [ 123, 234444, 345555555 ]

// Entries : it will return keys value combination as child array.
console.log(Object.entries(obj4)) // [ [ 'a', 123 ], [ 'b', 234444 ], [ 'c', 345555555 ] ]

console.log("######################################")
// Assign method : copy the porperties from one object to another object.
// both object are combined.
const objP1 = {p: 333, q: 777, r: 999}
const objP2 = {x: 888, y: 989, z: 234}
const result = Object.assign(objP1, objP2)
console.log("Result :", result)
// { p: 333, q: 777, r: 999, x: 888, y: 989, z: 234 }

console.log("##################################")
// Freeze method : this method doesn't allow modification in existing properties.
const Objx = { p: 333, q: 777, r: 999, x: 888, y: 989, z: 234 }

Object.freeze(Objx)

// Can not modify the freeze object data.
// Objx.p = 8989
// console.log(Objx)
// TypeError: Cannot assign to read only property 'p' of object '#<Object>'

console.log("################################")
// seal method : This method allow modification to existing properties, but adding/removal of data is not allowed.
const K_obj = { p: 333, q: 777, r: 999, x: 888, y: 989, z: 234 }

Object.seal(K_obj)

// update existing property
K_obj.r = 1000
console.log(K_obj) // { p: 333, q: 777, r: 1000, x: 888, y: 989, z: 234 }

// Delete existing property : this is not allowed with seal method
// delete K_obj.p // TypeError: Cannot delete property 'p' of #<Object>
// console.log(K_obj)

console.log("############################################################")
// hasOwn method : this method return true if key available in existing data.

var Y_Obj = { p: 333, q: 777, r: 1000, x: 888, y: 989, z: 234 }

console.log("Does it contains y as Key :", Object.hasOwn(Y_Obj, 'y')) // true
console.log("Does it contains w as Key :", Object.hasOwn(Y_Obj, 'W')) // false


console.log("############################################")
// Shallow copy and Reference Copy.

// Reference copy : When we assign  one object to another object, then it is called reference copy.
// in this case if we modify any value if any of object, it will relect in both objects.

// Reference copy
const obj11 = {'a': 123, 'b': 777, 'c':988}
const obj22 = obj11
obj22.a = 3000
console.log("Obj11 :", obj11) // { a: 3000, b: 777, c: 988 }
console.log("Obj22 :", obj22) // { a: 3000, b: 777, c: 988 }

// Shallo copy
const obj33 = {...obj11}
obj33['e'] = 500
console.log(obj33) // { a: 3000, b: 777, c: 988, e: 500 }
console.log(obj11) // { a: 3000, b: 777, c: 988 }