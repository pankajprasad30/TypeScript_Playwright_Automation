// Get the existing value of the property and set a new value to the property of the class. 

export class Person {
    private _name : string
    private _age : number
    private _address : string

    constructor(name: string, age: number, address: string) {
        this._name = name
        this._age = age
        this._address = address
    }

    public get age() {
        return this._age;
    }

    public set age(Newage: number) {
        this._age = Newage 
    }

    public get address() {
        return this._address
    } 

    public set address(newAddress: string) {
        this._address = newAddress
    }
}

/* const obj = new Person("Rahul", 35, "Pune Viman Nagar")
// Get the value of the `age` property using a getter. 
console.log("Initial age :", obj.age)
// Set a new property to the new value of the `age` property using a setter. 
obj.age = 50
// Get updated value using a age getter. 
console.log("Updated age :", obj.age)

console.log("initial address :", obj.address)
obj.address = "Pune, punewala"
console.log("Updated address :", obj.address) */