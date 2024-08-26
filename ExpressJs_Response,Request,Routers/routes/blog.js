// we use routers to organase the endpoints properly whithout suffocating and putting everything in one file
// separating endpoints to manage the code properly
// we connected this file in the main.js file 

const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Blogs home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})
// define the about route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router