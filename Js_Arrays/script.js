let arr= [1, 2, 4, 5, 7];


// to change the value in a array
arr[0]=42;


// to print the elements in the array
console.log(arr);

// to know the type of array
// in js, array is an object
console.log(typeof(arr))



// to know the length of the array
console.log(arr.length)

console.log("\n")

//to access single elements of the array 
console.log(arr[0]); 
console.log(arr[2]); 
console.log(arr[4]); 







// Js Methods

let arr2=[1, 5, 6, 8];
// to convert integer arr to strings
console.log(arr2.toString());

// to join the array elements with "and" or any word between them
console.log(arr.join(" and "))


// pop
// pops the last element in the arraay
arr2.pop();   // deletes the element as well as the memory
console.log(arr2)

// push
// pushes an element in the last of the array
arr2.push(100);
console.log(arr2)

// to pop the first item in the array
arr2.shift();
console.log(arr2)

// to push an element in the first in the array
arr2.unshift(50)
console.log(arr2)

// console.log(arr2.length)

console.log("\n")

// to delete any item from anywhere
delete arr2[2] // it deletes the element but the memory is still allocated
console.log(arr2)



console.log("\n")

// to concate(merge) arrays 
let a1=[1, 2, 3]
let a2=[4, 5, 6]
let a3=[7, 8, 9]

console.log(a1.concat(a2, a3))

console.log("\n")


//to sort an array
let a = [7, 9, 8]
a.sort();
console.log(a)

console.log("\n")

// splice
// splice() is a JavaScript Array method that is used to remove or replace elements from index to the the number of items asked to delete
let numbers=[1, 2, 3, 4, 5];
// numbers.splice(1, 3);  to just remove 
//  console.log(numbers);

//  to remove elements and replace them with another numbers
numbers.splice(1, 3, 10, 11, 12);
console.log(numbers)

console.log("\n")

// slice
// to print only a selected part of the element
console.log(numbers.slice(1, 3))

console.log("\n")

// reverse
// to reverse a given array
let numbers2=[11, 22, 33, 44, 55]
console.log(numbers2.reverse())
