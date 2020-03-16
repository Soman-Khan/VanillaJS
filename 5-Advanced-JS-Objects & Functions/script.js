//Object
var john = {
 name: 'john',
 yearOfBirth: 1990,
 job: 'Teacher'
}

// Function constructor/ Prototyping

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
/*
    // now lets make a method of our Person constructor
    // this is called prototyping in javascript
    // this prototype makes inheritance possible in javascript
*/
Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}

/*
    // its not necessary that the prototype always will be a method
    // it can also be a property
*/
Person.prototype.lastName = 'Smith';

/*
// create object of Person constructor...actually this the instance of Person constructor
// this is also called instantiation
*/
var john = new Person('john', 1990, 'teacher');
var jane = new Person('jane', 1983, 'designer');
var mark = new Person('mark', 1985, 'developer');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
