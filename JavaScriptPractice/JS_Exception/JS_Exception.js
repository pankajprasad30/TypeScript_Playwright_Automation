/*
Exception : Exception handling in JavaSript is used to manage runtime error, without stopping the entire program, 
...allowing the application to gracefully recover, log the issue, or display a user-friendly message instead of crashing.

JavaScript achieves this primarily through the try...catch...finally statement and the throw operator.

try: Wraps the block of code that might produce a runtime error.

catch: Defines a block of code to execute if an error is thrown within the try block. 
It receives the error object, which contains details about what went wrong.

finally: Defines a block of code that will execute regardless of whether an error occurred or not. 
It is typically used for cleanup operations (like closing connections).

throw: Allows you to generate your own custom errors based on specific conditions in your logic.
It helps us to write stable and reliable code.

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      // Manually throwing a custom error
      throw new Error("Cannot divide by zero."); 
    }
    let result = a / b;
    console.log("Result:", result);
  } catch (error) {
    // Handling the error gracefully
    console.error("An error occurred:", error.message); 
  } finally {
    // This runs no matter the outcome
    console.log("Division attempt finished."); 
  }
}

divideNumbers(10, 0)

Benefits of exception handling.
1. Prevent Application crashes.
2. Show meaningfull error messages to end user.
3. It helps to debug the application code.
4. Improve user experience and error hadling.

*/

// Exception with Reference Error:

function exception_handeling() {
    try{
        var a = 10
        var x = a + b
        console.log("Value of x : ", x)
    } catch(error){
        console.log("Error message: ", error.message)
        console.log("Error name: ", error.name)
        console.log("Error log: ", error.stack)
    }
}
exception_handeling()
console.log("Good Morning")
// Error message:  b is not defined
// Error name:  ReferenceError
// Error log:  ReferenceError: b is not defined


console.log("##############################################################")

function Exception_handeling2() {
    try{
        var a = 20
        console.log(a.toUpperCase())
        console.log("Value of x : ", x)
    } catch(error){
        console.log("Error message: ", error.message)
        console.log("Error name: ",error.name)
        console.log("Complete log: ", error.stack)
    }
    
}
Exception_handeling2()
// Error message:  a.toUpperCase is not a function
// Error name:  TypeError
// Complete log:  TypeError: a.toUpperCase is not a function

console.log("######################################################")
// Finally block of code will execute the program even there is exception or no exception in the code.

function exceptionHandeling_FinallyBlockk() {
    try {
        var a = 50
        //var b = 60
        var x = a + b
        console.log("value of x:", x)
    } catch (error) {
        console.log("Error message :", error.message)
        console.log("Error name :", error.name)
        console.log("complete log :", error.stack)
        
    } finally {
        console.log("Finally, get factorial of given number")
        var num=5
        var fact =1
        for(var i=num; i>0; i--) {
            fact = fact*i
        }
        console.log("output :", fact)
    }
}
exceptionHandeling_FinallyBlockk()
/*
Error message : b is not defined
Error name : ReferenceError
complete log : ReferenceError: b is not defined
    at exceptionHandeling_FinallyBlockk (file:///c:/Gitcode/GTM_PlaywrightTS_BATCH19/PankajPrasad/JavaScriptPractice/JS_Exception/tempCodeRunnerFile.js:5:21)
    at file:///c:/Gitcode/GTM_PlaywrightTS_BATCH19/PankajPrasad/JavaScriptPractice/JS_Exception/tempCodeRunnerFile.js:22:1
    at ModuleJob.run (node:internal/modules/esm/module_job:561:25)
    at async node:internal/modules/esm/loader:647:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)
Finally, get factorial of given number
output : 120
*/


console.log("##################################")
// through conditional error message message .

function CustomError(a, b) {
    try {
        if(b == 0) {
            throw new Error("Division with Zero is not allowed")
        } else {
            console.log("division output :", a/b)
        }

    } catch(error) {
        console.log("Error message :", error.message)
    }

}

CustomError(10, 2)
// division output : 5

CustomError(15, 0)
// Error message : Division with Zero is not allowed



console.log("#################################")
// Nested exception

function exceptionNested() {
    // outer exeception
    try {
        var a = 600
        var b = 700
        var c = a+b
        console.log("value of  c:", c)

        // inner exeception
        try{
            var p = 70
            copnsole.log("upper case:", p.toUpperCase())

        }catch(error2) {
            console.log("Inner Error :", error2.message)
            console.log("Inner of Error :", error2.name)
        }


    } catch(error) {
        console.log("Outer Error :", error.message)
        console.log("Name of Error :", error.name)
    }
}

//exceptionNested()
// Outer Error : b is not defined
// Name of Error : ReferenceError

exceptionNested()
// Inner Error : copnsole is not defined
// Inner of Error : ReferenceError


console.log("###################################################")
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      // Manually throwing a custom error
      throw new Error("Cannot divide by zero."); 
    }
    let result = a / b;
    console.log("Result:", result);
  } catch (error) {
    // Handling the error gracefully
    console.error("An error occurred:", error.message); 
  } finally {
    // This runs no matter the outcome
    console.log("Division attempt finished."); 
  }
}

divideNumbers(10, 0)