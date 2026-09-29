// class  :  A class is a blueprint of an object where we declare all the properties, 
//          attributes, and methods for an object. 
// object : An object is an entity through which we can access all the properties 
//          and methods that we have provided in the class. 
// method : A method is a function that is associated with the class
//          , The properties of a function and a method are almost the same. 
//          When it becomes part of a class, then it is called a method.

// constructor : A constructor is associated with the class object. 
//               It initializes the memory of the object, and it is auto called whenever 
//               we create an object of the class. 

//   There are two types of objects:
//     1. parameterized constructor: When we provide a parameter to the constructor, 
//                  then it is called a parameterized constructor. 

//     2. default constructor: When we don't provide any parameter to the constructor, 
//        then it is called a default constructor. 

// variable/property : Class properties that we have to declare at the class level and 
//                     specify what type of data type it is, and have to initialize those 
//                     properties inside the constructor as instance variables 

// Notes : 
// 1. No need to write the variable type to declare the properties in the class. 
// 2. It's not compulsory to keep the property name and the constructor parameter name the same. 
// 3. No need to write the `function` keyword while declaring the method in the class. 

class Employee {
    // declare employee class property
    emp_name : string
    emp_id: string
    emp_salary: string
    emp_designation: string
    constructor(emp_name1: string, emp_id1: string, emp_salary1: string, emp_designation1: string) {
        // initialiaze the prroperty of the class inside constructor with instance variable
        this.emp_name = emp_name1
        // intance variable through which we have initialize the property of the class.
        this.emp_id = emp_id1
        this.emp_salary = emp_salary1
        this.emp_designation = emp_designation1
    }


    showEmployeeDetails() {
        console.log("Employee Name :", this.emp_name)
        console.log("Employee ID :", this.emp_id)
        console.log("Employee Salary :", this.emp_salary)
        console.log("Employee Designation:", this.emp_designation)
    }

}

// create a object of the class.
const object1 = new Employee("Mohit", "8780007", "50000", "software enginee")

// Call the method of the class.
object1.showEmployeeDetails()
