// accessing an array using loop
let array=[22, 95, 77, 54, 10]

// for(let i=0; i<array.length; i++) {
//     console.log(array[i])
// }



// in for each loop, value, index and the whole array of each element is shown
array.forEach((value, index, arr) => {
    console.log(value, index, arr)
});

console.log("\n")

let array2=[12, 45, 31, 5, 10]

for (const key in array2) {
    if (Object.hasOwnProperty.call(array2, key)) {
        const element = array2[key];
        console.log(key, element)
    }
}

console.log("\n")

let array3=[17, 35, 23, 45]

for (const iterator of array3) {
    console.log(iterator)
}