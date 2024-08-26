// Promises means a function will be executed and till then it will wait for it and after the 1st function is executed then after waiting for it the 2nd one will get executed
// it runs in the background, it returns the final verdict of data if its rejected or resolved
// let prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Im done")
//         resolve("im 1")
//     }, 3000);
// })

// if there's no error then we dont neet to use catch we can write .then if the function executes

// after waiting prom1 to execute and after execution the resolve will be printed
// prom1.then((a)=> {
//     console.log(a)
// })


// let prom1 = new Promise((resolve, reject) => {
//     let rand= Math.random()
//     if (rand < 0.5) {
//         reject("You have lost the lucky draw")
//     }
//     else {
//     setTimeout(() => {
//         console.log("Im done")
//         resolve("im 1")
//     }, 1000);
// }
// })


// if rand !< 0.5 then, there will be error shown in the browser and to prevent that we use catch
// if its resolved then .then will work and if rejected then .then will not work

// prom1.then((a)=> {
//     console.log(a)
// }).catch(err => {
//     console.log(err)
// })




// promises all
// the Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill. if one promise is n ot fulfilled then it will not return

// let prom1 = new Promise((resolve, reject) => {
//     let rand= Math.random()
//     if (rand < 0.5) {
//         reject("You have lost the lucky draw")
//     }
//     else {
//     setTimeout(() => {
//         console.log("Im done")
//         resolve("im 1")
//     }, 3000);
// }
// })

// let prom2 = new Promise((resolve, reject) => {
//     let rand= Math.random()
//     if (rand < 0.5) {
//         reject("You have lost the lucky draw 2")
//     }
//     else {
//     setTimeout(() => {
//         console.log("Im done 2")
//         resolve("im 2")
//     }, 1000);
// }
// })


// let p1= Promise.all([prom1, prom2])

// p1.then((a)=> {
//     console.log(a)
// }).catch(err => {
//     console.log(err)
// })






// promises all settled

// if we want to see the status, reason as well as the value then we use all settled.
// resolve means if its not rejected then it will return a value

// all settled means even if something is rejected, then also the value will be returned along with the status and reason


let prom1 = new Promise((resolve, reject) => {
    let rand= Math.random()
    if (rand < 0.5) {
        reject("You have lost the lucky draw")
    }
    else {
    setTimeout(() => {
        console.log("Im done")
        resolve("im 1")
    }, 3000);
}
})

let prom2 = new Promise((resolve, reject) => {
    let rand= Math.random()
    if (rand < 0.5) {
        reject("You have lost the lucky draw 2")
    }
    else {
    setTimeout(() => {
        console.log("Im done 2")
        resolve("im 2")
    }, 1000);
}
})


// let p1= Promise.allSettled([prom1, prom2])

// p1.then((a)=> {
//     console.log(a)
// }).catch(err => {
//     console.log(err)
// })




// promise race
// the promise which will resolve first in less time will execute first

// let p1= Promise.race([prom1, prom2])

// p1.then((a)=> {
//     console.log(a)
// }).catch(err => {
//     console.log(err)
// })



// promise any
// if any of the promises is rejected then it will throw some error
// and if get gets resolved then the one which will take less time will be p=executed first

let p1= Promise.any([prom1, prom2])

p1.then((a)=> {
    console.log(a)
}).catch(err => {
    console.log(err)
})

