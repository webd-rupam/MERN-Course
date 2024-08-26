import path, { basename, dirname, extname } from "path";
console.log(path)

// to know the file extension
let myPath = "D:\\Full Stack Web Dev\\NodeJs_Fs,PathModules,Files\\ok.txt"
console.log(path, extname(myPath))

// to get the directory
console.log(path, dirname(myPath))

// to know the name of the file
console.log(path, basename(myPath))

// to join or create a new path
// and we can we the path
console.log(path.join("D:/", "programs\\ok.txt"))