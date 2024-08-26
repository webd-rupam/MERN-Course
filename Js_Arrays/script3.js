// Map, Filter and Reduce

// to make a new array using an existing array
// let arr1=[1, 13, 5, 7, 11]
// let arr2 =[]

// for(let i=0; i<arr1.length; i++) {
//     const element=arr1[i];
//     arr2.push(element**2)
// }

// console.log(arr2)

// instead of doing this we can to it in a shorter way
// using map

let arr1=[1, 13, 5, 7, 11]
// let arr2=arr1.map((e)=> {
//     return e**2;
// })

// console.log(arr2)

// or

function mapex(e) {
    return e**2;
}
console.log(arr1.map(mapex));



console.log("\n")

// filter
// const greaterThanseven= (e)=> {
//     if(e > 7) {
//         return true;
//     }
//     return false;
// }

// or

function greaterThanseven(int) {  // we can use any var such as, a, arr, op, wd anything
    if(int > 11) {
        return true;
    }
    return false;
}

console.log(arr1.filter(greaterThanseven))

console.log("\n")


// reduce
// The reduce function in JavaScript takes an array and applies a reducer function to each element, accumulating a single result value.

let a=[1,5,6,2]

function red(a, b) {
    return a*b;      // 1x5x6x2=60
}

console.log(a.reduce(red))


function redplus(a, b) {
    return a+b;      // 1+5+6+2=14
}

console.log(a.reduce(redplus))


console.log('\n')


// to convert an object to array
// we use from

console.log(Array.from("Anonymous"))





// to make a array by taking input

let n=prompt("Enter the size of the arr")
n=parseInt(n)

let arr=[]


for(let i=0; i<n; i++) {
    arr[i]=parseFloat(prompt("Enter the elements one by one in the array"))
}

console.log(arr)