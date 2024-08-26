const { error } = require("console")
const fs = require("fs")
console.log(fs)

// to create a new file
// synchronous
// console.log("starting")
// fs.writeFileSync("ok.txt", "wassup guys how u all", ()=>{
//     console.log("continue")
// })
// console.log("ending")

// to make it async, we do
console.log("starting")
fs.writeFile("bt.txt", "all good", ()=> {
    console.log("done")

    // to read 
    fs.readFile("bt.txt", (error, data)=> {
        console.log(error, data.toString())
    })

    //     // again
    // this is call back hell when we are doing the same thing multiple times
    // we should avoid this 
    //     fs.writeFile("bt.txt", "all good", ()=> {
    //         console.log("done")
        
    //         // to read 
    //         fs.readFile("bt.txt", (error, data)=> {
    //             console.log(error, data.toString())

    //             fs.writeFile("bt.txt", "all good", ()=> {
    //                 console.log("done")
                
    //                 // to read 
    //                 fs.readFile("bt.txt", (error, data)=> {
    //                     console.log(error, data.toString())

    //                     fs.writeFile("bt.txt", "all good", ()=> {
    //                         console.log("done")
                        
    //                         // to read 
    //                         fs.readFile("bt.txt", (error, data)=> {
    //                             console.log(error, data.toString())
    // })


    // to prevent callback hell
    fs.appendFile("bt.txt", "aiiii", (error, data)=>{
        console.log(data)
    })
    fs.appendFile("bt.txt", "aiiii", (error, data)=>{
        console.log(data)
    })
})

console.log("ending")