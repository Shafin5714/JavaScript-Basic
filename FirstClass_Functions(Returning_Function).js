//Function that creates different interview Questions 
//Function returning other function

function interviewQuestion(job) {

    if (job === 'designer') {
        return function (name) //Anonymous function
        {
            console.log(name + ', Can you explain What is UX design?');
        }
    } 
    else if (job === 'teacher'){
        return function(name)
        {
            console.log(name + ', What subject do you teach?');
        }
    }
    else{
        return function(name)
        {
            console.log(name + ', What  do you do?');
        }
    }
}

var teacherQuestion= interviewQuestion('designer');//fist store it in the variable then use the variable

teacherQuestion('John');
teacherQuestion('Mark');
console.log(teacherQuestion);




//direct
interviewQuestion('teacher')('Mike');


var designerQuestion = interviewQuestion('teacher');
designerQuestion('jane');
designerQuestion('Kevin');
