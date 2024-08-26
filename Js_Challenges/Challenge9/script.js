/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let random= Math.random()

const firstInput=prompt("Enter the First Number:");
const secInput=prompt("Enter the Second Number:");

const operation=prompt("Which operation do you want to perform?");

// converting the strings to numbers
const a=parseFloat(firstInput)
const b=parseFloat(secInput)


// if the percentage of random is more than 10% then it will perform corrct calc
if(random>0.1) { 
if(operation=="+") {
    console.log(a + b);
}
else if(operation=="-") {
    console.log(a - b);
}
else if(operation=="*") {
    console.log(a * b);
}
else if(operation=="/") {
    console.log(a / b);
}
else if(operation=="**") {
    console.log(a ** b);
}
else {
    console.log("Invalid Operation");
}
}

// if less than 10% then perform wrong calc
else {
    if(operation=="+") {
        console.log(a - b);
    }
    else if(operation=="-") {
        console.log(a / b);
    }
    else if(operation=="*") {
        console.log(a + b);
    }
    else if(operation=="/") {
        console.log(a ** b);
    }
    else if(operation=="**") {
        console.log(a ** b);
    }
    else {
        console.log("Invalid Operation");
    }
}