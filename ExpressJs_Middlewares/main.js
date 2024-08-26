const express = require('express')
const app = express()
const port = 3000
const fs= require ("fs");

// Middeware Modifies the Request
// app.use(express.static("public"))

// Middleware 1 
app.use((req, res, next) => {
    console.log('m1')
    console.log(req.headers)
    req.op = "im op"

    fs.appendFileSync("logs.txt", `${Date.now()} > ${req.method}\n`)
    console.log(`${Date.now()} > ${req.method}`)

    // if we dont use next then the next code which is below wont run
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    next()
})




app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello About!'+req.op)
})
app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})