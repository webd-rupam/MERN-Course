// using promises directly makes the code asynchronous

// function getData() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(450)
//         }, 3000);
//     }) 
// }

// console.log("loading modules")
// console.log("Do something else")
// console.log("load data")

// let data= getData()

// data.then((a) => {
//     console.log(data)
//     console.log("process data")
//     console.log("task 2")
// })

// console.log("yo bro wassup")
// console.log("hey bro")




// Async func
// better way of t=doing this is bu using async function
// this makes the code synchronous
// and we dont need to use .then here
// async function getData() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(450)
//         }, 3000);
//     }) 
// }


// to use await we need to make a function and wrap it up inside the func
// if we dont use await then the set timeout in the promise will no work and data will be given immediately

// therefore to get the desired delay we use await
// async function main() {
// console.log("loading modules")
// console.log("Do something else")
// console.log("load data")

// let data= await getData()

// console.log(data)
//     console.log("process data")
//     console.log("task 2")

//     console.log("yo bro wassup")
// console.log("hey bro")
// }

// main()




// Fetch api
// brings data from web from differnet websites or servers

async function getData() {
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data = await x.json()
  return data
}

async function main() {
    console.log("loading modules")
    console.log("Do something else")
    console.log("load data")
    
    let data= await getData()
    
    console.log(data)
        console.log("process data")
        console.log("task 2")
    
        console.log("yo bro wassup")
    console.log("hey bro")
    }
    
    main()