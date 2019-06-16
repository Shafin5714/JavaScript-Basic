var john ={
    fullName:'John Smith',
    bills:[124,48,268,180,42],
    calcTips:function()
    {
        
        this.tips=[];
        this.finalValues=[];
       
        for(var i=0;i<this.bills.length;i++)
        {
            // calculating tip
            var percentage;
            if(this.bills[i]<50)
            {
                percentage =0.2;
            }
            else if(this.bills[i]>= 50 && this.bills[i] < 200)
            {
                percentage=0.15;

            }
            else{
                percentage=0.1;
            }
            // add results
            this.tips[i]=this.bills[i]*percentage;
            this.finalValues[i]=this.bills[i]+ this.tips[i];
        }
    }
};

john.calcTips();
console.log(john);

var mark ={
    fullName:'Mark Miller',
    bills:[77,475,110,45],
    calcTips:function()
    {
        
        this.tips=[];
        this.finalValues=[];
       
        for(var i=0;i<this.bills.length;i++)
        {
            // calculating tip
            var percentage;
            if(this.bills[i]<100)
            {
                percentage =0.2;
            }
            else if(this.bills[i]>= 100 && this.bills[i] < 300)
            {
                // 10 percent
                percentage=0.1;

            }
            else{
                percentage=0.25;
            }
            // add results
            this.tips[i]=this.bills[i]*percentage;
            this.finalValues[i]=this.bills[i]+ this.tips[i];
        }
    }
};

mark.calcTips();
console.log(mark);


function calcAverage(tips)
{
    var sum =0
    for(i=0;i<tips.length;i++)
    {
       sum= tips[i]+sum;
    }
    return sum/tips.length
}

// Do calculations 
john.average=calcAverage(john.tips);//storing the avg property on john object
console.log(john.average)
mark.average=calcAverage(mark.tips);
console.log(mark.average)



if(john.average>mark.average)
{
    console.log('Johns family pays higher tips');
}
else
{
    console.log('Marks family Pays Higher tips');
}