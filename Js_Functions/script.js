// Functions are used to avoid repetitive tasks
function nice(name) {
    console.log("Hey! " + name + " You are great")
    console.log("Hey! " + name + " You are nice")
    console.log("Hey! " + name + " Your tshirt looks good")
    console.log("Hey! " + name + " Your laptop is a beast")
}

nice("Virat");  
nice("Bumrah")



function sum(a, b) {    
    console.log(a+b)   
}
sum(5, 3);

// or to to store the function in a variable
function sum2(c, d) {
    return c+d;
}
let result=sum2(3, 2)
console.log(result)
// console.log(sum2(2, 2))



// optional parameter

function sum3(one, two, three=3) {
    return one + two + three
}
// if value of three is not given it will use 3, and if the value is given, then three will be changed

let result2=sum3(4, 4)
console.log(result2)

let result3=sum3(4,4,1)
console.log(result3)



// Arrow functions
// Arrow function {()=>} is concise way of writing JavaScript functions in shorter way. Arrow functions were introduced in the ES6 version
const func1= (x)=> {
    console.log("Done",x)
}

func1(58)
func1(22)