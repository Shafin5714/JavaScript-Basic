function repeatStringNumTimes(str,num){
    if(num==0){
        return ""
    }
   var finalStr = ''
    for(i=0;i<num;i++){
        finalStr += str
    }
    return finalStr

}


console.log(repeatStringNumTimes('abc',3));


// 2nd way using built in function

function repeatStringNumTimes2(str,num){

if(num===0) return ''

 return str.repeat(num)
}


console.log(repeatStringNumTimes2('abc',3));
