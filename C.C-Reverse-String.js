// Using Built in Method


function reverseStr(str)
{
    
 var string=str.split('') //converting string to array

 console.log(string);

 var revStrArr=string.reverse();  //for reversing array
 console.log(revStrArr)
 
 var revStr= revStrArr.join('');//converting it to string
 return revStr;


}

var rev=reverseStr('Hello');
console.log(rev)

//using raw

function revStr2(str2)
{
    var final='';


    for(var i=str2.length-1;i>=0;i--)
    {
        var rev = str2[i];
        console.log(rev);
       final =final+str2[i]; //adding the string to empty string
       

    }
    return final;  //when everything is done Then return 
    


}


console.log(revStr2('Hello'));
