const cars = ["BMW","Audi","Tesla","Ferrari","Lamborghini"]


// remove specific element form array

let d
const deCars = cars.indexOf("Ferrari")
if(deCars!== -1){
   d = cars.splice(deCars, 1)[0];   // get the deleted element
}

console.log(d);
