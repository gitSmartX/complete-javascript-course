/* 
//Challange 1
var massJohn = prompt("Input mass of John");
var heightJohn = prompt("Input height of John");
var massMark = prompt("Input mass of Mark");
var heightMark = prompt("Input height of Mark");
var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);
var bmiWinner = bmiMark > bmiJohn;
console.log("Mark`s BMI is " + bmiMark);
console.log("John`s BMI is " + bmiJohn);
console.log("Is Mark`s BMI higher than John`s? " + bmiWinner);
*/

/*
// Challange 2

var avrJohn = (114 + 120 + 103) / 3;
var avrMike = (119 + 97 + 123) / 3;
var avrMary = (97 + 134 + 105) / 3;
if (avrJohn > avrMike && avrJohn > avrMary) console.log("John is Winner");
else if (avrJohn === avrMike && avrJohn === avrMary) console.log("Draw");
else if (avrMike > avrMary) console.log("Mike is Winner");
else console.log("Mary is Winner");
console.log("Average John is " + avrJohn);
console.log("Average Mike is " + avrMike);
console.log("Average Mary is " + avrMary);
*/

//*************************Arrays***********************
/*
var names = ['John','Mark', 'Jane'];
var years = new Array (1990, 1969, 1948);

//console.log(names);
//console.log(names.length);
//console.log(names[0]);

var dif_types = ['John', 1990, true];
console.log(dif_types);

dif_types.push('blue');
console.log(dif_types);

dif_types.unshift('First');
console.log(dif_types);

dif_types.pop();
console.log(dif_types);

dif_types.shift();
console.log(dif_types);

console.log(dif_types.indexOf(true));

var isBoolean = dif_types.indexOf(false) === -1 ? 'False' : 'True';
console.log(isBoolean);

dif_types.push(false);
var isBoolean = dif_types.indexOf(false) === -1 ? 'False' : 'True';
console.log(dif_types, isBoolean);
*/

// Challange 3
/*
function calc_proc(value, procent)
{
    return value * procent / 100;
}

function tipCalculator(bill)
{
    if (bill < 50 && bill > 0) return calc_proc(bill, 20);
    else if (bill >= 50 && bill <= 200) return calc_proc(bill, 15);
    else if (bill > 200) return calc_proc(bill, 10);
    else return console.log('Incorrect Bill');
}

var bills = [45, 145, 555];

var tips = new Array (  tipCalculator(bills[0]), 
                        tipCalculator(bills[1]),
                        tipCalculator(bills[2]));

var finalPayments = new Array(  bills[0] + tips[0],
                                bills[1] + tips[1],
                                bills[2] + tips[2]);

tips.forEach((tip, i) => {
    console.log(tip + " number is " + i);
});

finalPayments.forEach((payment, i) => {
    console.log(payment + " number is " + i);
});
*/

//****************  Objects and Properties ****************/
/*
function ageCalculator(year){
    return (2018 - year);
}
var person_1 = {
    firstName: 'Denis',
    lastName: 'Smith',
    birthYear: 1997,
    age: ageCalculator(1997),
    family: ['V', 'L'],
    job: 'student',
    isMarried: false
};

console.log(person_1.firstName);
console.log(person_1['lastName']);
console.log(person_1.age);

var person_2 = new Object();
person_2.firstName = 'Dmitry';
console.log(person_2.firstName);
person_2['haveDog'] = false;
console.log(person_2.haveDog);
*/

//****************  Objects and Methods ****************/
/*
var person = {
    firstName: 'Denis',
    lastName: 'Smith',
    birthYear: 1997,
    calcAge: function(){
        return 2018 - this.birthYear;
    },
    family: ['V', 'L'],
    job: 'student',
    isMarried: false
};

console.log(person.calcAge());
*/

//****************  Challange 4  **********************/
/*
var John = {
    fullName: 'John Smith',
    mass: 75,
    height: 1.85,
    calcBMI: function (){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
};

var Mark = {
    fullName: 'Mark Smith',
    mass: 85,
    height: 1.88,
    calcBMI: function (){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
};

if (John.calcBMI() > Mark.calcBMI()) console.log(John.fullName +'`s BMI:'+ John.bmi + ' more than '+
Mark.fullName +'`s BMI:'+ Mark.bmi);
else if (John.bmi === Mark.bmi) console.log(John.fullName +'`s BMI:'+ John.bmi + ' equal to '+
Mark.fullName +'`s BMI:'+ Mark.bmi);
else console.log(John.fullName +'`s BMI:'+ John.bmi + ' less than '+
Mark.fullName +'`s BMI:'+ Mark.bmi);
*/

//*************  CHALLANGE 5  *****************
/*
var tipCalculatorForJohn = {
    procents: [.20, .15, .10],
    tips: [],
    totalPayment: [],
    calcTips: function(bills){
        var temp = 0;
        for (let i = 0; i < bills.length; i++) {
            if (bills[i] < 50 && bills[i] > 0){
                temp = bills[i] * this.procents[0];
                this.tips.push(temp);
                this.totalPayment.push(bills[i] + temp);
            } 
            else if (bills[i] >= 50 && bills[i] <= 200) {
                temp = bills[i] * this.procents[1];
                this.tips.push(temp);
                this.totalPayment.push(bills[i] + temp);
            }
            else if (bills[i] > 200) {
                temp = bills[i] * this.procents[2];
                this.tips.push(temp);
                this.totalPayment.push(bills[i] + temp);
            }
        }
        return true;
    }
};

var tipCalculatorForMark = {
    procents: [.20, .10, .25],
    tips: [],
    totalPayment: [],
    calcTips: function(bills){
        var temp = 0;
        for (let i = 0; i < bills.length; i++) {
            if (bills[i] < 100 && bills[i] > 0){
                temp = bills[i] * this.procents[0];
                this.tips.push(temp);
                this.totalPayment.push(bills[i] + temp);
            } 
            else if (bills[i] >= 100 && bills[i] <= 300) {
                temp = bills[i] * this.procents[1];
                this.tips.push(temp);
                this.totalPayment.push(bills[i] + temp);
            }
            else if (bills[i] > 300) {
                temp = bills[i] * this.procents[2];
                this.tips.push(temp);
                this.totalPayment.push(bills[i] + temp);
            }
        }
        return true;
    }
};

function averageCalc(payments) {
    var total = 0;
    for (let i = 0; i < payments.length; i++) {
        total += payments[i];
    }
    return total / payments.length;
}

var billsJohn = [124, 48, 268, 180, 42];
var billsMark = [77, 475, 110, 45];
tipCalculatorForJohn.calcTips(billsJohn);
tipCalculatorForMark.calcTips(billsMark);
console.log('John');
console.log(billsJohn);
console.log(tipCalculatorForJohn.tips);
console.log(tipCalculatorForJohn.totalPayment);
console.log('Mark');
console.log(billsMark);
console.log(tipCalculatorForMark.tips);
console.log(tipCalculatorForMark.totalPayment);
