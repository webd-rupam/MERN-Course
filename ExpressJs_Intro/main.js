const express = require('express')
const app = express()
const port = 3000

// to share files to the public we want to
app.use(express.static('public'))

app.get('/about', (req, res) => {
  res.send('Hello World About!')
})
app.get('/contact', (req, res) => {
  res.send('Hello World Contact!')
})
app.get('/support', (req, res) => {
  res.send('Hello World Support!')
})

// get requesr, client asks the server for something
app.get('/blog', (req, res) => {
  res.send('Hello World Blog!')
})
// app.get('/blog/js', (req, res) => {
//     res.send('Hello World Blog about js!')
//   })
//   app.get('/blog/python', (req, res) => {
//     res.send('Hello World Blog about python!')
//   })

// easier way of doing it instead of doing it multiple times, snd to get anything in blog even which is not there
app.get('/blog/:slug', (req, res) => {
    console.log(req) // will request objects
        res.send(`Hello World ${req.params.slug}!`)
      })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})