// Destructuring
// to assign integers for more than one varible
let [a, b] = [5, 7]
console.log(a, b)


// ...z means rest other elements which have nto been assigned
let [x, y, ...z] = [5, 7, 1, 2, 3, 4]
console.log(x, y, z)


// Destructuring for objects
let obj = {
    op: 10,
    lp: 15,
    gp: 12
}

let {op, lp} = obj
console.log(op, lp)


// ... is spread operator
function sum(a, b, c) {
    return a+b+c
}

let q= [8, 2, 1]
// console.log(q[0] + q[1] + q[2])
// instead
console.log(sum(...q))
