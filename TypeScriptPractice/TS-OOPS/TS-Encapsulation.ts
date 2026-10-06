// Ecapsulation : When we bind the class and its properties in a single 
// unit and do not allow access outside of the class, then it is called encapsulation. 

// Encapsulation can be achieved with the help of access modifiers. 
// There are three types of access modifiers:
// 1. public : Public: Modify any method and variable declared as public.
//             It is accessible inside the class and accessible outside 
//             of the class without any error. 

// 2. private : Declare any variable as private so that it is only accessible 
//            inside the class. We cannot access it outside of the class, not even in its child class. 

// 3. protected : When we declare any method or any variable as protected, then it is 
//               accessible inside the class and its child class. Cannot be accessed outside of the class 

// 4. readonly : This type of variable and method is accessible anywhere but not modifiable. 

// parent class
class UserDetails {
    public name: string
    private phone: number
    protected email: string
    readonly address: string

    constructor(name: string, phone: number, email: string, address: string) {
        this.name = name
        this.phone = phone
        this.email = email
        this.address = address

    }

    showUserDetails() {
        console.log("Public Prop name :", this.name)
        console.log("Private Prop phone :", this.phone)
        console.log("Protected Prop email:", this.email)
        console.log("Read only Prop :", this.address)
    }


}

// child class method.
class XYZ extends UserDetails {

     constructor(name: string, phone: number, email: string, address: string) {
        super(name, phone,  email, address)
    }

    AccessPublic(){
        console.log("Name :", this.name)
    }

    AccessProtected(){
        // Protected properties are accessible inside the child class.  
        console.log("email :", this.email)
    }

    // Private variable are only accessible inside the class not outside.
    // AccessPrivate() {
    //     console.log("phone:", this.phone)
    // }



}


const obj = new XYZ("JOhn", 90789798978, "john@gmail.com", "Pune, Baner")
console.log("Access public variable :", obj.name)
//console.log("Access private :", obj.phone) // not accessible outside of class
//console.log("Access protected:", obj.email) // not accessible outside of class

obj.name = "Rahul"
console.log(obj.name)
// obj.address = "Pune, Kothrud" // not modifiable as it is readonly