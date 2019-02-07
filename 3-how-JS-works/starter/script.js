///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1997);

function calculateAge(year) {
    console.log(2018 - year);
}

var retirement = function(year) {
    console.log(65 - (2018 - year));
}

retirement(1997);
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/
 
// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
/*
calculateAge(21);

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this);
}
*/

var John = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
        console.log(this);

        function innerFunction(){
            console.log(this);
        }

        innerFunction();
    }
}

John.calculateAge();

var Mike = {
    name: 'Mike',
    yearOfBirth: 1980,
}

Mike.calculateAge = John.calculateAge;
Mike.calculateAge();




