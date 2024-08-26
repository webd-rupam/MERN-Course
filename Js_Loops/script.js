// for loop
// for(let i=0; i<=100; i++) {
//     console.log(i)
// }


let obj= {
    "name":"anonymous",
    "role":"coder",
    "company":"op solutions"
}
// for in loop
// The for-in loop in JavaScript iterates over the enumerable properties of an object, executing a specified block of code for each property. It's commonly used for iterating through object properties or elements in an array.
for (const key in obj) {
        const element = obj[key];
        console.log(key);  
    }


//     // for of loop
//     // A for...of loop iterates a value of string or array(iterables).
//     for (const iterator of "Endgame") {
//         console.log(iterator)
//     }


// while loop
// let n=5;
//     while (n<10) {
//         console.log(n)
//         n++;
//     }


// will run once even when the condition is wrong
// let m=10;

// do {
//     console.log(m);
//     m++;
// } while (m<2);
