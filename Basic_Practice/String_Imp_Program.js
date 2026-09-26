// 1. How do you create a string in JavaScript?
let str1 = "Pankaj" // Simple string with single quotes
let str2 = 'Pankaj' // Simple string with double quotes
let str3 = `Hello ${str2}` // Backticks with variable
let str4 = new String('Pankaj') // String object (not recommended)
console.log(str1)
console.log(str2)
console.log(str3)
console.log(str4)

// 2. How do you find the length of a string in JavaScript?
let str = "Darshika Prasad"
console.log(str.length)

let emp = ""
console.log(emp.length)

// 3. How can you concatenate two strings in JavaScript?
let str5 = "Pankaj"
let str6 = "Prasad"
let result1 = str5 + ' '+ str6
let result2 = str5.concat(" ", str6) // Using concat()
let result3 = `${str5} ${str6}`
console.log(result1)
console.log(result2)
console.log(result3)

// 4. What is the difference between == and === when comparing strings in JavaScript?
console.log('5' == 5) 
console.log('5' === 5)
console.log('hello' === 'hello')
/*
The primary difference in JavaScript is that == (loose equality) performs type coercion 
to convert values to a common type before comparing them, 
while === (strict equality) compares both the value and the type exactly as they are without converting them.
*/