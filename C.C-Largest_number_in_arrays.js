function largestOfFour(arr){
    let maxes=[];
    for(let i=0;i<arr.length;i++){
        let tempMax = arr[i][0];
       for(let j=0;j<arr[i].length;j++){
        let currentNum=arr[i][j];
        console.log(arr[i][j]);
        
        if(currentNum>tempMax){
            tempMax=currentNum;
        }
       }
       maxes.push(tempMax);
        
    }
    return maxes
    
}
console.log(largestOfFour([[4,5,1,3],[13,27,28,26],[32,35,37,39],[1000.1001,857,1]]));

