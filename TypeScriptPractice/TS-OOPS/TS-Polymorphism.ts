//Polymorphism is when one person performs multiple tasks. Here, we can take the example of a method. 
// If one method performs multiple tasks, then it is called polymorphism. 

// In the concept of polymorphism, there are two types of polymorphism:
//1. Method overriding: When two classes are connected to each other via inheritance and
//  both classes have the same method name, in that case, the child class method will 
// override the parent class method. That is called method overriding. 

//2. Method overloading : When one class has two methods with the same name but different parameters, 
// then in that case it's called method overloading. 

// But TypeScript does not allow method overloading. 
// Why? Because it does not allow duplicate method names. 

// parent class
class ABC {

    greeting() {
        console.log("Method from ABC class")
    }

    addition(num1: number, num2: number) {
        console.log("Addition :", num1+num2)
    }

}

// child class method.
class XYZ extends ABC {
    greeting(): void {
        console.log("Good Morning from XYZ class")
    }

    multiplication(n1: number, n2:number) {
        console.log("multiplication :", n1*n2)
    }

    // In TypeScript, we cannot declare two methods with the same name, as duplicate methods are not allowed. 
    // multiplication(p1: number, p2: number, p3: number) {
    //     console.log("multiplication values:", p1*p2*p2)
    // }

}

const obj = new XYZ()
// The child class's `greeting` method will be called, and it will override the parent class method.
obj.greeting()
obj.addition(40, 50)
obj.multiplication(7, 8)