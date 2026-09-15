/*
- string is immutable data type
- we can specify any value as string with single or double quotes.
- string follows indexing, and it starts from zero.
*/

var s1 = "Pankaj"

// 0 1 2 3 4 5
// P a n k a j

console.log(s1[0]) // P
console.log(s1[3]) // k

console.log("##############################")
var s2 = 'Pankaj ^(#&$^_@^&%6376175 YGDYUF@ 231231'
console.log(s2, ":", typeof s2) // Pankaj ^(#&$^_@^&%6376175 YGDYUF@ 231231 : string

console.log("##############################")
// Apple loop on string.
var v1 = "JavaScript"
for(var char of v1){
    console.log(char)
}

console.log("##############################")
// includes method : this method retrun of sub/char is available in the string.
var str3 = "Hello We Are Learning JavaScript"
console.log(str3.includes("We")) // true
console.log(str3.includes("H")) // true
// char does not exist
console.log(str3.includes("PP")) // false


console.log("###################################")
var str3 = "Hello We Are Learning JavaScript"
// write a program to get count of all vowels in the give string.
var vowels = "aeiouAEIOU"
var count = 0
var temp = ''

for (var chr of str3) {
    if(vowels.includes(chr)) {
        count += 1
        temp += chr
    }  else {
        continue
    }
}
console.log("count of vowels :", count, temp)

console.log("##############################################")
// String uppercase and lowercase.
var str_A = "Learning Java Script"
console.log("Uppercase output: ", str_A.toUpperCase()) // LEARNING JAVA SCRIPT
console.log("Lowercase output : ", str_A.toLowerCase()) // learning java script



console.log("##############################################")
// index of 
var str_A = "Learning Java Script"
console.log("index of n: ", str_A.indexOf('n')) // 4
console.log("index of J: ", str_A.indexOf("J")) // 9

console.log("##############################################")
// trim method : It removes all spaces from begining and end of the string.

var str_b = "  Good morning  "
// remove both side spaces
console.log(str_b.trim())
// remove left side space
console.log(str_b.trimStart())
// remove right side spaces
console.log(str_b.trimEnd())

console.log("##############################################")
// slice method : method help to get substring from login using indexing.
// slice(start index, end index) : output will include start index and exclude the end index value.
// It also accepts the negative indexing as well.
var strC = "JavaScript Is Fun"
console.log(strC.slice(0, 10)) // JavaScript
//output will include start index char and exclude last index character.
// JavaScript
console.log(strC.slice(14, 17)) // Fun
console.log(strC.slice(4)) // Script Is Fun
// String bupports negative indaving also.
console.log(strC.slice(-3)) // Fun


// get all characters and their index position using for in loop.
var s1 = "Programming"
for(var a in s1) {
    console.log(a, ":", s1[a])
}

console.log("####################################")
// substring(start, index) : it doesn't accept the negative indexing.
// it works same as slice method.

var s2 = "JavaScript Programming"
console.log(s2.substring(11)) // Programming

console.log("###############################")
// replace method : this method replace word1 with word2 and return the output.
var s4 = "We Are Learning Python, Its Fun to Learn Python"
var result = s4.replace("Python", "JavaScript")
// It will replace on first occurrences of Python with Javascript
console.log("Result :", result)
// We Are Learning JavaScript, Its Fun to Learn Python

// ReplaceAll method : It will replace all occurrences.
var result2 = s4.replaceAll("Python", "TypeScript")
console.log("result2 :", result2)
// We Are Learning TypeScript, Its Fun to Learn TypeScript

console.log(result2.replaceAll(" ", ""))
// WeAreLearningTypeScript,ItsFuntoLearnTypeScript

console.log("##############################")
//split method : this method split string from given delimeter and return as array of
// substrings.

var strF = "India Won Cricket World Cup"
console.log(strF.split(" "))
// [ 'India', 'Won', 'Cricket', 'World', 'Cup' ]

var strG = "India-Won-Cricket-World-Cup"
console.log(strG.split("-"))
// [ 'India', 'Won', 'Cricket', 'World', 'Cup' ]

var strF = "India$Won$Cricket$World$Cup"
console.log(strF.split("$"))
// [ 'India', 'Won', 'Cricket', 'World', 'Cup' ]


console.log("###################################")
// string concatenation.
var strK = "Learning JavaScript"
var strJ = "Programming"
var strL = "Fundamentals"

//1. concatenate with plus operator
var r1 = strK +" "+strJ+" "+strL
console.log(r1)

//2. concatenation with back tick
var r2 = `${strK} ${strJ} ${strL}`
console.log(r2)

//3. Concatenation with concat method.

var r3 = strK.concat(" ", strJ).concat(" ", strL) 
console.log(r3)


console.log("##############################")
// repeat() : this method repeat the given string n number of times.

var str1 = "JavaScript "
console.log(str1.repeat(5))
// JavaScript JavaScript JavaScript JavaScript JavaScript 

console.log("##############################")

// get ASCII Value
// A - Z : 65- 90
// a - z: 97 - 122
console.log("A".charCodeAt(0)) // 65
console.log("Z".charCodeAt(0)) // 90
console.log("ABC".charCodeAt(2)) // 67