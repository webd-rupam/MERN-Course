let a = prompt("Enter 1st number")
let b = prompt("Enter 2nd number")

let sum = parseFloat(a) + parseFloat(b)

// Error handling

// Throw errors
// if we enter strings in the as inputs then, it will now not show any error but output will come as NAN
// And, js has a frogiving nature, so to disable the forgiving nature we throw errors
// therefore to show error for any case we use error handling

if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed, i guess u entered strings")
}
// console.log("The sum is: ", sum)

// Try catch
// here js will show inbuilt error as x is not defined 
// but if we use catch and error, we can still execute the code and by this the error in red line will not come
// we can give error without stopping the execution(the red thing in execution(inbuilt error throw), which means the code is stopped, will not appear)
// try {
//     // if there is error
//     console.log("The sum is: ", sum*x)

//     // then it will pass to catch
// } catch (error) {
//     console.log("Bhaiya nhi ho payega, pehle har chiz ko define toh karlo yaar")
// }


let x=1

function calc() {
try {
    // if there is error
    console.log("The sum is: ", sum*x)
    return true
    // then it will pass to catch
} catch (error) {
    console.log("Bhaiya nhi ho payega, pehle har chiz ko define toh karlo yaar")
    return false
}

// we use finally in to do something after try and catch is done
// we dont need it if we are not using try and catch in a function

// we need finally, when we are using a function and returning something

// when we return something the function stops, but to prevent that, we can use finally to excute a code after return
finally {
    console.log("Connections are being closed")
}
}

calc()



