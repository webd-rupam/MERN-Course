// let obj = {
//     a: "anthony",
//     b: 1
// }

// console.log(obj)



// // setting prototypes
// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

// // setting or grouping rabbit as an animal
// rabbit.__proto__ = animal

// console.log(rabbit.eats)



// Using CLasses
class animal {
    constructor(name) {
        // to set a name property
        this.name = name
        console.log("Object is created...") 
    }
    eats() {
        console.log("Khana de")
    }
    jumps() {
        console.log("kood ne de")
    }
}

let a = new animal("Bunny");
console.log(a)


// to make a new class object and want to add(inherit) the data of the prevous class object 
class lion extends animal {
    // method overriding
    eats() {
        console.log("Sher aaj khayega")

// both the eat statements, of lion and animal both will be shwon
        super.eats()
    }
}

let l= new lion("Shera")

// will show sher aaj khayega, as we have assigned it differently
console.log(l.eats())

// it will show the same thing as animal, as we didnt set anything differently
console.log(l.jumps())


// tells if the obj belongs to a class or any class which is inherited and if ti belongs to it or not
if(l instanceof animal) {
    console.log("true")
}
else {
    console.log("false")
}
