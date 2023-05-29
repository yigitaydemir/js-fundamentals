// String Methods

let value;

const firstName = "yiğit"
const lastName = "aydemir"
const occupation = "engineer"

let langs = "turkish, french, german"

// 1 - Concat
// adds all the given parameters at the end of the selected variable

value = firstName.concat(" ", lastName, " " , "is an ", occupation)
// value = " " + lastName + " " + "is an " + occupation

console.log(value) // yiğit aydemir is an engineer


// 2 - Index Of
// finds the index of given parameter in the selected variable, returns
// -1 if not found

value = firstName.indexOf("y") // 0
value = firstName.indexOf("t") // 4
value = firstName.indexOf("z") // -1 (not found in the string)


// 3 - Char At
// finds the char at given index

value = firstName.charAt(0) // y
value = firstName.charAt(firstName.length - 1) // t
value = firstName.charAt(55)


// 4 - Split
// splits the string with given seperator and creates an array of items 
// seperated

value = langs.split(",") // ["turkish", "french", "german"]


// 5 - Replace
// replaces the first parameter with the second parameter in a string

value = langs.replace("turkish", "greek") // "greek, french, german"


// 6 - Includes
// checks if the string includes the given parameter, if yes returns true
// if not returns false

value = langs.includes("turkish") // true
value = langs.includes("spanish") // false

console.log(value)