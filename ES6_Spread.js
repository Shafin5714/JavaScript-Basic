// Basically, there are three places you can use spread: 

//1. In function calls
//2. In array literals
//3. In object literals


console.log(Math.min(45,65));
// if array
const temperatures = [75,65,94,55,61,45]
console.log(Math.min(temperatures));///NaN not a number (cant compare between this array and nothing else)

// spread out the items in this array as individual items
console.log(Math.min(...temperatures));

const tvShows = ['The big bang theory','Game of thrones','How I met your mother']
console.log(...tvShows);

console.log('This stuff is',..."BANANAS");

// Combine two arrays
const parents = ["Lorie", "Steve"];
const kids = ['Jake', "Annie", "Jess"];
const combine =[parents,kids]  //gives nested arrays
console.log(combine);

const FullFamily =[...parents,...kids]
console.log(FullFamily);

const parents2 = ["Lorie", "Steve"];
const kids2 = ['Jake', "Annie", "Jess"];
const dogs = ['Olie', 'Cosmo'];

const fullFamily2 = [...parents2, ...kids2, "Me", ...dogs, "Unnamed Turtle"];
console.log(fullFamily2);


// copy an array
const originals = ["Mona Lisa", "American Gothic", "The School of Athens"];

const copies = [...originals]
copies.push('NightHawks')
console.log(copies);
console.log(originals);



// In objects literals
// combining two objects
const mainColors = {brightRed: "#e55039", waterfallBlue: "#38ada9"};
const accentColors = {lightGrey: "#778ca3", swanWhite: "#f7f1e3"};

const fullPalette ={...mainColors,...accentColors} 
console.log(fullPalette);


// add in a property:
const lion = {hasTail: true, legs: 4};
const eagle = {canFly: true };
const hybrid = {name: "Gryphon", ...lion, ...eagle};
console.log(hybrid);







