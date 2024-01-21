import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    return (
        <div className="todo-child">
            <input style={{
                padding: 10
            }} placeholder="title" onChange={(e) => {
                const title = e.target.value
                setTitle(title)
            }}></input>
            <br></br>
            <input style={{
                padding: 10,
                marginTop: 5
            }} placeholder="description" onChange={(e) => {
                const desc = e.target.value
                setDesc(desc)
            }}></input>
            <br></br>
            <button style={{
                margin: 5
            }} onClick={() => {
                fetch('http://localhost:3000/todo/', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: title,
                        desc: desc
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(async (res) => {
                    const json = await res.json()
                    // alert('Todo created')
                })
            }}>Add todo</button>
        </div>
    )
}
