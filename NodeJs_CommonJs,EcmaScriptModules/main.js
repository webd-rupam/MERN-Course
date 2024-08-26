
// to import any module we use require
// using Common js we import modules
// const { createServer } = require('node:http');
// const fs = require('fs')
let a = require("./module2.js")
console.log(a)






// now if we use type as module in the json package, then we cant use require 
// we have to use import, according to the es6 module which is modern

// import { createServer } from 'http'

// importing from local file
// import {a, b} from "./module.js"
// console.log(a, b)

// import obj from "./module.js"
// console.log(obj)
// // or we can name it anything as its default
// import moye from "./module.js"
// console.log(moye)
