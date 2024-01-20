/*
console.log("hello");

for(var i = 0; i < 10; i++) {
    console.log(i);
}

let a = true;
let b = true;
console.log(a && b);

let c = 10;
let d = 20;
if(c==10 && d<20){
    console.log(c);
} */

/*
//Trying the modulus operator

let e = 57
let eTen = Math.floor(e/10);    //Best way to convert float to integer
//let eTen = (e/10) | 0;
let eUnit = (e%10);
console.log("First Answer= " + (eTen + eUnit));

console.log((e%10) + (e - (e%10))/10)

let test1 = 211;
var ansTest1 = 0;
while(test1 > 0){
    let a = test1 % 10;
    ansTest1 = ansTest1 + a;
    test1 = parseInt(test1 / 10);   //Can be used but not the best answer
}
console.log(ansTest1);

console.log(12.7 | 0);  //Modulus with 0 removes all the decimal value
*/

/*
//Question 3 - bill problem
let bill = 60;
let paid = 100;
let balance= paid - bill;
console.log("Balance= " + balance);

let totalNotes = 0;
let fiftyPounds = 0;
let twentyPounds = 0;
let tenPounds = 0;
while(balance > 0){

    if(balance >= 50){
        balance = balance - 50;
        fiftyPounds++;
        totalNotes++;
    }


    if(balance >= 20){
        balance = balance - 20;
        totalNotes++;
        twentyPounds++;
    }


    if(balance >= 10){
        balance = balance - 10;
        totalNotes++;
        tenPounds++;
    }

}
console.log("£50= " + fiftyPounds);
console.log("£20= " + twentyPounds);
console.log("£10= " + tenPounds);
console.log("Total = " + totalNotes);

//Question 4 - solution
let bill1 = 2;
let paid1 = 40;
let balance1 = paid1 - bill1;
console.log("Balance= " + balance1);

if(balance1 >= 50){
    console.log("£50: " + parseInt(balance1 / 50));
    balance1 = balance1%50;
}

if(balance1 >= 20){
    console.log("£20: " + parseInt(balance1 / 20));
    balance1 = balance1%20;
}

if(balance1 >= 10){
    //console.log("£10= " + parseInt(balance1 / 10)); //There won't be more than 1 10 pound note as it will be taken care by 20£ note; hence we can write this as:
    console.log("£10: 1");
    balance1 = balance1%10;
}

if(balance1 >= 5){
    //console.log("£5= " + parseInt(balance1 / 5));
    console.log("£5: 1");
    balance1 = balance1%5;
}

if(balance1 >= 2){
    console.log("£2: " + parseInt(balance1 / 2));
    balance1 = balance1%2;
}

if(balance1 >= 1){
    console.log("£1: " + parseInt(balance1 / 1));
    balance1 = balance1%1;
}
*/

//Functions
function paySlip(name, salary){
    let tax = salary * 21/100;
    let net = salary - tax;

    console.log("Name: " + name);
    console.log("Salary: " + salary);
    console.log("Tax:", tax);
    console.log("Net:", net);
}

paySlip("Vasu", 1000);