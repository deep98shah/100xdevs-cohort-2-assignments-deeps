const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://deepshah:pwd1%40Mongodb.com@cluster0.ulidvhr.mongodb.net/todo-app').then('DB connected')

const TodoSchema = mongoose.Schema({
    title: String,
    desc: String,
    completed: Boolean
})

const todo = mongoose.model('todos', TodoSchema)

module.exports = {
    todo
}