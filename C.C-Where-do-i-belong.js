function getIndexToIns(arr,num){
    console.log(arr);
    arr.sort((a,b)=>{
        return a-b
    })
    console.log(arr);
    for(i=0;i<arr.length;i++){
        if(num<=arr[i]){
            return i
        }
    }
    return arr.length
    
}
console.log(getIndexToIns([20,15,2,6],21));

