// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


var moveZeros = function (arr) {
    let last = arr.length-1
    console.log(last);
    let count =0;
    for (let i = 0; i< arr.length; i++) {

    if(arr[i]!==0){
      arr[count]=arr[i]
      count++
    }
    
  }
  while(count< arr.length){
    arr[count] =0
    count++
  }
  return arr

}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));



var moveZeros2 = function (arr) {

  var result = [];
  var zeros = [];

  for (var i in arr) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    }if (arr[i] !== 0) {
      result.push(arr[i]);
    }
  }
  return result.concat(zeros);
}

console.log(moveZeros2([1,2,0,1,0,1,0,3,0,1]));


// const moveZeros2 = (arr) => [
//   ...arr.filter(e => e !== 0), 
//   ...arr.filter(e => e === 0)
// ];
// console.log(moveZeros2([1,2,0,1,0,1,0,3,0,1]));