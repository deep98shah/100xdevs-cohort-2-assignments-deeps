const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 3000

todos = []

// middleware
app.use(bodyParser.json())

app.get('/mytodos', (req, res) => {
    res.send(todos)
})

app.post('/createtodo/:todo', (req, res) => {
    const  todoId = req.params.todo
    const body = req.body
    let isTodoExist = false
    console.log(req.headers)
    console.log(body)
    todos.forEach(todo => {
        if (todo.id == todoId) {
            todo.text = body.text
            isTodoExist = true
            res.send("Todo updated")
        }
    });
    if (!isTodoExist) {
        todos.push({id: parseInt(todoId, 10), text: body.text})
        res.send("Todo created")
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})