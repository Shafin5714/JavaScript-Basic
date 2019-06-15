function palindrome(str)
{
 //   Regex to remove all non alpha-numeric and replace spaces with +
//by using regular expression
      str=str.toLowerCase();
     str = str.replace(/[^a-z0-9+]+/gi, '');
    rev=newStr.split('').reverse().join('');//converting string to array then reversing it and agin to str
    console.log(rev);
    if(rev===str)
    {
        return true;
    }
    else
    {
        return false
    }
    

}

console.log(palindrome('eye')) ;