// Description:

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
    if(str==''){
        return []
    }
     var newString 
     if(str.length%2!==0){
         newString = str.concat('_') 
         console.log(newString);
         
         
     }else{
         newString = str
     }
     newString = newString.match(/../g)
     console.log(newString);
     
     return newString
     
    
     
   }
   console.log(solution(""), []);
   
   console.log(solution("a"))
   console.log(solution("abc"))
   console.log(solution("abcd"))
   console.log(solution("abcde"))