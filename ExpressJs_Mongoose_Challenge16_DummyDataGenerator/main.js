// Generate a dummy data in this format in a collection called employees in a db called company

// {
// name: "Harry",
// salary: 45000000,
// language: "Python",
// city: "New York",
// isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 







const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employee')

mongoose.connect('mongodb://localhost:27017/company');
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr)=> {
    let rno = Math.floor(Math.random() * (arr.length-1))
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
    // clearing the collection before generating more
    await Employee.deleteMany({})
    // generate random data


    let randomName = ["Harry", "Tyson", "Tony", "Loki"]
    let randomSalary = [20000, 50000, 85000]
    let randomLang = ["Python", "Javascript", "Ruby"]
    let randomCity = ["Mumbai", "Noida", "Purulia", "Kolkata"]



    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomName),
            salary: getRandom(randomSalary),
            language: getRandom(randomLang),
            city: getRandom(randomCity),
            isManager: false
        })
    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})