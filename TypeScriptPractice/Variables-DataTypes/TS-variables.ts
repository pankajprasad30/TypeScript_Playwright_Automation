var a:number = 200

console.log("value of a :", a)
// string type variable only contains string.
var b:string = "300"
console.log("value of b :", b)

console.log("------------------------------")
var c: string = "We are learning TypeScript Programming"
console.log("value of c:", c)

// array data tyep
var d: string[] = ["Hello", "Learning", "Programming", "Is", "Fun"]
console.log(d)

var e: number[] = [5, 7, 8, 9, 10, 20]
console.log(e)

var f: [string, number] = ['Python', 789879879]
console.log(f)


console.log("----------------------------")
const Obj1: {
    name: string, 
    age: number,
    email: string,
    phone: number
} = {
    name: "Pooja",
    age: 35,
    email :'pooja@gmail.com', 
    phone: 687676876
}

console.log(Obj1)

console.log("####################################################")
const employee: any = {
    empID: 'HID0341',
    empAge: 39,
    empEmail: 'swq@hotmail.com',
    empPhone: 123123123,
}
employee.empAddress = "Bangalore, kormangala"
console.log(employee)

console.log("#############################################")
// interface, we can use as template to declare the value of object

interface details {name: string, age: number, email: string, phone: number }

const user1 = {
    name: 'Pankaj Prasad',
    age: 39,
    email: 'wqer@outlook.com',
    phone: 313123123
}
console.log(user1)

const user2 = {
    name: "Darshika",
    age: 3,
    email: 'darshu@hotmail.com',
    phone: 312312
}
console.log(user2)






















