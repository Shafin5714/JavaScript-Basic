function hello(name)
{
    print(name)
}
function print(args)
{
    console.log(args);
}
hello('Shafin');



//Callback Function
function hello2(name,print2)
{
    print2(name)
}

hello2('Shafin', function(args2){

    console.log(args2);
});

hello2('Mike',function(args2){
console.log('How are You '+args2+'?')
});

hello2('Mike',function(args2){
    console.log(args2.length);
});



//agin
var me ={

  name:'Shafin',
  age:22,
  email:'Shaifn5714@gmail.com'

};


function printMySelf(person,callback){
        console.log('Person is '+person.name)  
        if(person.age>18){
            callback(person.email)
        }  
        else{
            console.log('You are to young');
        }
       
        
}

printMySelf(me,function(mail){
    console.log('My email is '+mail);
});


//


function pro(data,callback1,callback2){
    console.log('data is '+data);
    callback1(data);
    callback2(data);

}



pro('Shafin',function(a){

    var a =a.toUpperCase();
    console.log(a+' is Awesome')



},function(a){

    var a =a.toLowerCase()

  console.log(a+' is pro');


});








