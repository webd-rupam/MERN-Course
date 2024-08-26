// to use a db and crete it if it does not exist
use("CrudDb")

// CREATE

// to create a collection
// db.createCollection("courses")

// // to insert single group of data in document
// db.courses.insertOne({
//     name: "My web dev course",
//     price: 0,
//     assignments: 12,
//     project: 45,
// })

// // to insert multiple groups of data in document
// db.courses.insertMany([
//     {
//         "name": "Introduction to Python",
//         "price": 0,
//         "assignments": 8,
//         "project": 20
//     },
//     {
//         "name": "JavaScript Essentials",
//         "price": 0,
//         "assignments": 10,
//         "project": 25
//     },
//     {
//         "name": "Advanced CSS Techniques",
//         "price": 0,
//         "assignments": 6,
//         "project": 15
//     },
//     {
//         "name": "Database Management Systems",
//         "price": 0,
//         "assignments": 12,
//         "project": 30
//     },
//     {
//         "name": "Front-End Development",
//         "price": 0,
//         "assignments": 14,
//         "project": 40
//     },
//     {
//         "name": "Back-End Development with Node.js",
//         "price": 0,
//         "assignments": 11,
//         "project": 35
//     },
//     {
//         "name": "React for Beginners",
//         "price": 0,
//         "assignments": 9,
//         "project": 25
//     },
//     {
//         "name": "Full-Stack Web Development",
//         "price": 0,
//         "assignments": 15,
//         "project": 50
//     },
//     {
//         "name": "Responsive Web Design",
//         "price": 0,
//         "assignments": 7,
//         "project": 20
//     },
//     {
//         "name": "UI/UX Design Fundamentals",
//         "price": 0,
//         "assignments": 10,
//         "project": 30
//     }
// ]
// )




// READ

// to find a value
// db.courses.find({price: 0})
// or to see it in console
// let a = db.courses.find({price: 0})
// console.log(a)

// to find the number of documents
// console.log(a.count())

// to display it as an array
// console.log(a.toArray())

// to find the first group of data
// let b = db.courses.findOne({price: 0})
// console.log(b)




// UPDATE

// will update first one group of data
db.courses.updateOne({price: 0}, {$set:{price: 100}})

// will update multiple groups of data
db.courses.updateMany({price: 0}, {$set:{price: 1000}})






// DELETE
// will delete first one group of data
db.courses.deleteOne({price: 100})

// will delete multiple groups of data
db.courses.deleteMany({price: 1000})