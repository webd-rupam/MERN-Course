console.log("Im a hacker")
console.log("Anonymous is  a hecker")

// according to us after "anonymous is a hecker", set time out func"jaldi wahan se hato will be printed and at the last "the end will be printed"
// but according to js asynchronous nature "jaldi wahan se hato" will be printed at the last 
//it will not wait for 2 secs to let it print first, the one which will take less time to execute will be executed/printed first


setTimeout(() => {
    console.log("Jaldi wahan se hato")
}, 2000);

console.log("the end")







// Callbacks 
// Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function
