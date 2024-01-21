export function Todos({todos}) {
    return (
        <div className="todo-child">
            {todos.map((todo) => {
                return <Todo title={todo.title} desc={todo.desc} completed={todo.completed}></Todo>
            })}
        </div>
    )
}

function Todo(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h4>{props.desc}</h4>
            <h4>{props.completed}</h4>
        </div>
    )
}

