function findingLongetWord(str)
{
     var string= str.split(" ") //converting it into array
    console.log(string);
    var longest="";
    for(words of string)//converting them into individual words 
    {
        console.log(words)
        
        if(words.length > longest.length )
        {
            longest=words;
        }
    }
    return longest;


}

var result = findingLongetWord('The Quick Brown Fox Jumped Over The lazy Dog');
console.log(result)