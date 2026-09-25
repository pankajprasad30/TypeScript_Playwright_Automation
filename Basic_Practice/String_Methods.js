/*

Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

String length
String charAt()
String charCodeAt()
String codePointAt()
String concat()
String at()
String [ ]
String slice()
String substring()
String substr()
String toUpperCase()
String toLowerCase()
String isWellFormed()
String toWellFormed()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String repeat()
String replace()
String replaceAll()
String split()
*/

// String length
// The length property returns the length of a string:
let text = "PANKAJ Prasad"
let length = text.length
console.log(length) // 13

// String charAt()
// The charAt() method returns the character at a specified index (position) in a string:
console.log(text.charAt(4)) // A

// String charCodeAt()
// The charCodeAt() method returns the code of the character at a specified index in a string:
//The method returns a UTF-16 code (an integer between 0 and 65535).
console.log(text.charCodeAt(3)) // 75

// String codePointAt()

// String concat()
// concat() joins two or more strings:
let text1 = "Hello"
let text2 = "World"
console.log(text1.concat(" ",text2)) // Hello World

// String at()
// String [ ]

// String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
let text4 = "Apple, Banana, Kiwi"
let part = text4.slice(7, 13)
console.log(part) // Banana

// String substring()
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi"
console.log(str.substring(7,13))



// String substr()

// String toUpperCase()
let str1 = "Pankaj"
console.log(str1.toUpperCase())

// String toLowerCase()
console.log(str1.toLowerCase())

// String isWellFormed()
// String toWellFormed()


// String trim()
// The trim() method removes whitespace from both sides of a string:
let text5 = "      Hello World!      ";
let text6 = text5.trim()
console.log(text6) //  Hello World!

// String trimStart()
console.log(text5.trimStart()) // Hello World!
// String trimEnd()
console.log(text5.trimEnd()) //       Hello World!

// String padStart()
// String padEnd()
// String repeat()


// String replace()
// let name = "Pankaj"
// let nexName = name. replace("Neha")
// console.log(nexName)
// String replaceAll()


// String split()
/*
text.split("")     // Split on characters
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
*/
let text7 = "The quick brown fox.";
const myArr = text7.split(" ")
console.log(myArr) // [ 'The', 'quick', 'brown', 'fox.' ]




























































