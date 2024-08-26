// The alert() method in JavaScript is used to display a virtual alert box. It is mostly used to give a warning message to the users. 
alert("Hello World");


// To print
console.log('Code is running')
console.log("Code is also running...")
console.log("is looking like a wow")

//  prompt is a built-in function that displays a dialog box with a message and allows the user to input data.
// cannot run prompt func. in terminal only available in browser
var a = prompt("Enter your number")

console.log("Your number is: "+ a)

// confirm is a built-in function that displays a dialog box with a message that asks ok or cancel for confirmation
// cannot run confirm func in terminal only available in browser
var isTrue=confirm("Are u sure u want to leave this page?")

if(isTrue) {
    console.log("Your computer blasted")
}
else {
    console.log("Your computer is safe")
}
