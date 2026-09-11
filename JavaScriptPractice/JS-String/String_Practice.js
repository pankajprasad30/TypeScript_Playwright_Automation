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