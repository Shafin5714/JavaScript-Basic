// Question
// input

// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//  n: a positive integer, the number of checkout tills.

// output

// The function should return an integer, the total time required.

// sample

// queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// should return 12



// sort a-b ascending 
function queueTime(line, registers) {
    var queueArr = [];
    for(var i = 0; i < registers; i++) {
      queueArr.push(0);
      console.log(queueArr);//[0,0]
      
    }
    // console.log(queueArr)
    for(var j = 0; j < line.length; j++) {
      queueArr[0] = queueArr[0]+line[j];// [0,0] [10,0] for sorting its [0,10],[2,10],[5,10]....
      console.log(queueArr)
      queueArr.sort(function(a,b){
        return a-b;
      });
    }
    
    return queueArr[queueArr.length-1];
  }


console.log( queueTime([10,2,3,3], 2));


