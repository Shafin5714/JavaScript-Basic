function checkArrayInGroup(arr,size){

var groups =[]
while(arr.length>0){
    groups.push(arr.slice(0,size))
    arr=arr.slice(size)
    
}
return groups
}



console.log(checkArrayInGroup(['a','b','c','d'],3));
