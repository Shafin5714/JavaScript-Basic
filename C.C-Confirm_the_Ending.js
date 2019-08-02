// using Ends with function
function confirmEnding(str,target){
    if(str.endsWith(target)){
        return true;
    }
    else{
        return false;
    }
}


console.log(confirmEnding("Bastian","n"));

// using substr()

function confirmEnding2(str2,target2){
    if(str2.substr(-target2.length)===target2){
        return true;
    }
    else return false;


}
console.log(confirmEnding2("Bastian","n"));

