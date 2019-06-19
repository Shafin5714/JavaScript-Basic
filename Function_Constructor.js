// Write function Constructors with capital letter

var Person = function(name,yearOfBirth,job)
{
    this.name=name;   //its the this of new object that is created/will be created
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    this.calculateAge = function()
    {
        console.log(2019-this.yearOfBirth);
    }
}


//creating prototype function

Person.prototype.sum = function(a,b)
{
    return (a+b) 
}

//creating prototype property

Person.prototype.lastName='Smith'





//this is called instantiation
//this objects are instance of person object

var john = new Person('John',1990,'teacher');

//pass arguments into the function
//this will only work if new(operator) is used (first new empty object is created then the constructor function
// is called is called with the arguments)

console.log(john);
console.log(john.name);
console.log(john.yearOfBirth);
john.calculateAge();
console.log(john.lastName);


console.log(john.sum(5,6));

var jane= new Person('jane',1969,'designer');

console.log(jane);

var mark = new Person('Mark',1948,'retired');
console.log(mark);


console.log(mark.sum(5666,96554));