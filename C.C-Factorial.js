function factorial(num)
{
    var sum=1;
    for(i=num;i>=1;i--)
    {
       
        sum=sum*i;
    }
    return sum;

}
console.log(factorial(5));

