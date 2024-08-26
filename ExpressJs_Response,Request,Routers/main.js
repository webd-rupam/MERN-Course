const express = require('express')
// router
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static('public'))

// router
app.use('/blog', blog)
app.use('/shop', shop)



// get request 
// basic and default request that the browser uses
app.get('/', (req, res) => {
  res.send('Hello World Get!')
})

// post request
// to request sensitive inforations so that thy are not shown in the url
app.post('/', (req, res) => {
    console.log("This is a post request")
  res.send('Hello World Post!')
})

// PUT is used to send data to a server to create/update a resource
app.put('/', (req, res) => {
    console.log("This is a put request")
  res.send('Hello World Put!')
})




// to serve a html or any file
app.get('/index', (req, res) => {
  res.sendFile('templates/index.html', {root:__dirname})
})




// response method Json  
app.get('/api', (req, res) => {
  res.json({a:1, b:2, c:"op"})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




