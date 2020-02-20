// remove all the values
// arguments takes in all the things you pass into the function in object format
function destroy(arr){
    let results = []
console.log(arr);
console.log(arguments);//0:{1,2,3,1,2,3} 1:{2,3,1}
// convert it to array
    let args = Array.from(arguments)
    let targets = args.slice(1)  //everything from index 1
    console.log(targets); /// 2,3,1
    for(let num of arr){
        if(targets.indexOf(num)==-1){
            results.push(num)
        }
        
    }
    console.log(results);
    

    return arr
}

// takes only one parameter but we are passing 4 parameters so 2,3,1 is optional
destroy([1,2,3,1,2,3],2,3)