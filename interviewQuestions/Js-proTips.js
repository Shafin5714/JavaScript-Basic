// Remove falsy values form array

//   There are only six falsey values in JavaScript: undefined, 
// null, NaN, 0, "" (empty string), and false of course.

let miscellaneous = [0, 1, '', undefined, false, 2, undefined, null, , 3, NaN];

let goodValues = miscellaneous.filter(Boolean)

console.log(goodValues);


// Convert any values to boolean

console.log(!!"Shafin");
console.log(Boolean("Shafin"));


// Resize any array

let animals = ["cat","dog","monkey","ant"]

animals.length = 3

console.log(animals);

// How to flatten a multi-dimensional array

let words = ["a",["b","c"],"d"]
// upto 1 level
console.log(words.flat());

// multilevel array 
let words2 = ["a",["b","c",["e","f"]],"d"]
console.log(words2.flat(Infinity));

// Short conditional


const person ="Shafin"

person === 'Shafin' && console.log("lazy")

person === 'Shafin' || console.log("still lazy")


// Replace all occurrences of string

const quote = "React is a JS framework & this framework is the most popular front-end framework right now"

// g for all occurrences
console.log(quote.replace(/framework/g,'library'));


// Log values with variable names smartly
const library1 ="jQuery"
const library2 = "React" 

console.log({library1});
