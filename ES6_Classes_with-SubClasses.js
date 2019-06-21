//ES5
//superclass
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;

}

Person.prototype.calculateAge=function(){
    var age =new Date().getFullYear()-this.yearOfBirth;
    console.log(age);
}

//subclass
//this keyword will point to the empty object Person properties are set to Athlete object so call the function constructors(With this keyword) and set the properties to athlete object



var Athlete = function(name, yearOfBirth, job,olympicGames,medals){
    Person.call(this,name,yearOfBirth,job);
    this.olympicGames=olympicGames;
    this.medals=medals;

}


Athlete.prototype=Object.create(Person.prototype); //first subclass then super class


var John= new Athlete('John Smith',1970,'swimmer',5,10);
console.log(John);

Athlete.prototype.wonMedal=function(){
    this.medals++;
    console.log(this.medals);
}

John.calculateAge();
John.wonMedal();
console.log(John);



///ES6
class person6{
    constructor(name,yearOfBirth,job){
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }

    calculateAge6(){
        var age =new Date().getFullYear()-this.yearOfBirth;
        console.log(age);
    }

}

class athlete6 extends person6{
    constructor(name,yearOfBirth,job,olympicGames,medals){
        super(name,yearOfBirth,job);
        this.olympicGames=olympicGames;
        this.medals=medals;
    }


    wonMedal6(){
        this.medals++;
        console.log(this.wonMedal6);
    }


}


const John6 = new person6('John',1990,'teacher');
console.log(John6);
const John6A= new athlete6('John Smith',1970,'swimmer',5,10);
console.log(John6A);

John6A.calculateAge6();
John6A.wonMedal6();
console.log(John6A)