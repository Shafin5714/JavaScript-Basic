function titleCase(str)
{
   var word= str.toLowerCase().split(' ');  //separate them in individual words using space 
    console.log(word)
    for(i=0;i<word.length;i++)
    {
     word[i]=word[i][0].toUpperCase()+word[i].slice(1);  //word[i]=cat word[0]=C
    }
    return word.join(' ');
}





var s=titleCase('cat is best')
console.log(s);


// Other Ways
function titleCase2(str)
{
    var title =str.toLowerCase().split(' ').map(function(elem){
      return elem[0].toUpperCase()+elem.slice(1);
    });
    return title.join(' ');

}
var t=titleCase2('I am sick');
console.log(t);