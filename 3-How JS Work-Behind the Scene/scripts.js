/****************** HOISTING *********************/
calculateAge(1990);

function calculateAge(year){
    console.log(2019 - year);
}
/*
*** function expression is not hoisted in JavaScript
*** only declarative fucntion works with HOISTING
*** that's why the code under will throw error
*/


//retirement(1985);
var retirement = function(year){
    console.log(65 - (2019-year));
}


console.log(age);
var age = 26;

function foo(){
    var age = 60;
    console.log(age);
}
foo();
console.log(age);
