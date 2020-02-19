// falsy values are false,null, 0,"", undefined and NaN
// falsy values will be if(" ") { log "hello"} output will be undefined
function bouncer(arr){
    // let Truthy = []
    // arr.forEach(e=>{
    //     if(e){
    //         Truthy.push(e)
    //     }
    // })
    //return Truthy
    return arr.filter(e=>{ //return the method
        return e  //condition inside filter
    })
    
}

console.log(bouncer([7,"ate","",false,9]));

// ex filter
// let nums = [5,1,2,9]
// let s= nums.filter(num=>{
//     return num>5 
    
// })
// console.log(s);  //9


