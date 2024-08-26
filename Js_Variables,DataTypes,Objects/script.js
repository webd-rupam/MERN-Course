var a=10;
var b=15;
var c="nice";

console.log(a+b)


// Variables

// using varible constant, it will remain fixed and cannot be change or modiefied
const op=12;
// op=13;
// eg, op=2, error will be shown if we change the value
// console.log(op)



// we can modify the value in let
let e=66;

// we can use let as block variable
{
    let e=22;
    console.log(e) 
    // now the value will be 22 as a block
}

// if no block is there then it will use globally
console.log(e)



// we can modify the value in var
var f=33;
f=17;
// console.log(f) will print if the console log is before it

{
    var f=11;
    console.log(f)
}
// once declared in block then it will sustain the value and cannot be used even if we acces it globally
console.log(f)


// Data Types
// primitive data type
let x="youtube";   // string
let y=90;         // integer
let z=5.7;       // float
const p=true;    // boolean
let q=undefined; // any varible with no value
//primitive but returns as object
let r=null;

console.log(x,y,z,p,q,r)

// to know the data types
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


// objects
// to add multiple details in a varible together
let o= {
    "name":"harry",
    "job code":5600,
}

console.log(o)
// to add something outside
o.salary=500;
console.log(o)