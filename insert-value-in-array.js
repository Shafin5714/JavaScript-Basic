let arr = ["apple", "orange", "raspberry"];

// insert in position 1
// arr.splice(1,0,"Rose")
// console.log(arr)

let newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (i == 1) {
    newArr[i] = "rose";
    newArr.push(arr[i]);
  } else {
    newArr.push(arr[i]);
  }
}

console.log(newArr);
