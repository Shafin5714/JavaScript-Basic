// Swapping Value
var arr = [1, 2, 3, 4];

console.log(([arr[0], arr[3]] = [arr[3], arr[1]]));
// [arr[0], arr[3]] = [arr[3], arr[1]];
console.log(arr);

// Destructuring Aliases

const languages = {
  name: "JavaScript",
  founded: 1995,
  founder: "Brendan Eich",
};

const { name: languageFounder, founder } = languages;

console.log(languageFounder, founder);

// Remove Duplicate From array
const array = [1, 2, 2, 1, 3, 5, 6, 6, 7];

console.log([...new Set(array)]);

// Compare two array by value
const hasSameElements = (a, b) => {
  return a.length === b.length && a.every((v, i) => v === b[i]);
};

console.log(hasSameElements([1,2],[1,2]));


// Shuffling array
const numbers = [1,2,3,4,5,6]
console.log(numbers.sort(()=> Math.random()-0.5));


// Comma Operator

let x = 1 
x=(x++,x)
console.log(x); //2

let y = (2,3)
console.log(y);  // 3