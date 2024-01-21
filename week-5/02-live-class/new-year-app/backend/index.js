const express = require('express')
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.post('/todo', async (req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    console.log(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: 'You sent the wrong inputs!'
        })
        return
    }
    // create entry in mongo db
    await todo.create({
        title: createPayload.title,
        desc: createPayload.desc,
        completed: false
    })

    res.status(200).json({
        msg: 'Todo created!'
    })
})

app.get('/todos', (req, res) => {
    const todos = todo.find().then((todos) => {
        return res.status(200).json({todos: todos})
    })
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: 'Please send wrong input'
        })
        return
    }
    await todo.updateOne({
        _id: updatePayload.id
    }, {
        completed: true
    })

    res.json({
        msg: 'Todo marked as completed'
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('App listening on port 3000...')
})