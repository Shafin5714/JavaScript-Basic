//ES5

function sum1(a,b,c,d){
    return a+b+c+d;
}
console.log(sum1(6,7,8,9));

//ES6

const numbers =[56,89,56,55];
const sum= sum1(...numbers);//combines them
console.log(sum);

//Joining two arrays
const familySmith=['John','Jane','Mike'];
const familyMiller=['Bob','Ann'];


const BigFamily=[...familySmith,'Lily',...familyMiller];
console.log(BigFamily);