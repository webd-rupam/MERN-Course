import fs from "fs/promises"

// dont need to use async func here as its a module
let a =await fs.readFile("ok.txt")

let b = await fs.writeFile("ok.txt", "\n\n\n\n amazing bro")

console.log(a.toString(), b)
