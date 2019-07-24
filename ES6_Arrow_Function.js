const years=[1990,1997,1945,1960];
let yearOfBirth= years.map(element =>2019-element);
console.log(yearOfBirth);

// normal function
function sum(a,b){
    return a+b
}
console.log(sum(5,6));

let sum6 =(a,b)=>a+b;
let a = sum6(5,6);
console.log(a);

function isPositive(number){
  return number>0
}

console.log(isPositive(5));

let isPositive6 =(num)=>num>0;
console.log(isPositive6(8));

function randomNumber(){
    return Math.random()
}
console.log(randomNumber());

let randomNumber6 =()=>Math.random();

console.log(randomNumber());

document.addEventListener('click',function(){
 console.log('click');
 
});

document.addEventListener('click',()=>console.log('Click'));