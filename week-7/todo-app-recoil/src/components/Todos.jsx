import { useRecoilValue, useSetRecoilState } from "recoil"
import { TodoAtom, FilteredTodoList, FilterTodoAtom} from "../store/atoms/Todos"
import { useEffect } from "react"
import axios from 'axios'

export default function Todos() {

    const setTodos = useSetRecoilState(TodoAtom)
    useEffect(() => {
        axios.get('https://sum-server.100xdevs.com/todos').then(async (res) => {
            const todos = await res.data.todos
            console.log(todos)
            setTodos(todos)
        })
        setInterval(() => {
            axios.get('https://sum-server.100xdevs.com/todos').then(async (res) => {
            const todos = await res.data.todos
            console.log(todos)
            setTodos(todos)
        })
        }, 20000);
    }, [])

    // const filteredTodoList = [{
    //     title: 'Todo 1',
    //     description: 'Desc 1'
    // },{
    //     title: 'Todo 2',
    //     description: 'Desc 2'
    // }
    // ]

    const filteredTodoList = useRecoilValue(FilteredTodoList)
    const setFilterString = useSetRecoilState(FilterTodoAtom)
    console.log('From Todo component: ', filteredTodoList)
    return (
        <div className="todo-child">
            <div>
                <input type="text" placeholder="Search todo" onChange={(e) => {
                    const value = e.target.value
                    setFilterString(value)
                }}/>
            </div>
            <br></br>
            <div>
                {filteredTodoList.map((todo) => {
                    return <Todo title={todo.title} description={todo.description}></Todo>
                })}
            </div>
        </div>
    )
}


function Todo(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
        </div>
    )
}