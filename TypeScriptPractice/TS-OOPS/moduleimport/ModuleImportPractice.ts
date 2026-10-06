import { Person } from '../TS-getter-setter';

// Object of imported class and provide a parameter to the constructor 
/*
const p1 = new Person("Rohit", 25, "Pune, Baner")
console.log(p1.age)
// set value using setter
p1.age = 30
// get value using getter
console.log("get value of getter :", p1.age)
*/

class ABC extends Person {
    num1: number
    num2: number
    constructor(name: string, age: number, address: string, n1: number, n2: number) {
        super(name, age, address)
        this.num1 = n1
        this.num2 = n2
    }

    addition() {
        console.log("Add result :", this.num1 + this.num2)
    }
}


const obj2 = new ABC("Raman", 30, "Pune, Balewadi", 70, 80)
console.log(obj2.age) // get value of age using getter
obj2.age = 35 // set value of age using setter
console.log("Updated age :", obj2.age)
obj2.addition() // calling child class method