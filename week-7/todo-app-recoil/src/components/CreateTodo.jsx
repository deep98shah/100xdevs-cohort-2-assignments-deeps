import { useSetRecoilState } from "recoil"
import { TodoAtom } from "../store/atoms/Todos"
import { useRef } from "react"

export default function CreateTodo() {
    const setTodos = useSetRecoilState(TodoAtom)
    const titleRef = useRef()
    const descRef = useRef()

    const handleAddTodoOnClick = () => {
        setTodos(todos => [...todos, {title: titleRef.current.data, description: descRef.current.data}])
    }

    return (
        <div className="todo-child">
            <input placeholder="Todo title" ref={titleRef}></input>
            <br></br>
            <input placeholder="Todo description" ref={descRef}></input>
            <br></br>
            <button onClick={handleAddTodoOnClick}>Add todo</button>
        </div>
    )
}