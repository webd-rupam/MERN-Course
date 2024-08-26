const express = require('express')
const app = express()
const port = 3000

// ejs is a template engine
// it is used to pass variables in a template
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["op", 4, 8]
  res.render("index",  {siteName:siteName, searchText:searchText, arr})
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Why Adidas"
    let blogSearch = "Search Now blog "
  res.render("blogpost",  {blogTitle:blogTitle, blogSearch:blogSearch})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})