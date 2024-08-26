// Monguse is a package library of js, we can use it to connect database and use it for good queries
// it sets conditions for schemas
import mongoose from "mongoose"

import express from "express"
import {todo} from "./models/todo.js"

let conn = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const Todo = new todo({title: "first todo", desc: "nothing much", isDone: false, days: "oh"})
    Todo.save()
  res.send('Hello World!')
})

app.get('/a', async (req, res) => {
    let Todo = await todo.findOne({})
    console.log(todo)
    res.json({title: Todo.title, desc: Todo.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})