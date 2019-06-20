// Creating Object(object.create)

/*First define an object which will act as a prototype 
Then create a new object based on the prototype*/


var personProto ={
    calculateAge:function () {
        console.log(2019-this.yearOfBirth);
    }
};



var john=Object.create(personProto);
john.name='John Smith';
john.yearOfBirth=1960;
john.calculateAge();
console.log(john);

//another way

var jane =Object.create(personProto,{
    name:{value:'Jane Smith'},
    yearOfBirth:{value: 1970},
    job:{ value:'Designer'}
    

});
jane.calculateAge();