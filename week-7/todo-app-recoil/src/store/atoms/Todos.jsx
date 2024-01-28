import { atom, selector } from 'recoil'

export const TodoAtom = atom({
    key: 'todos',
    default: []
})

export const FilterTodoAtom = atom({
    key: 'filterTodosString',
    default: ''
})

export const FilteredTodoList = selector({
    key: 'filteredTodoList',
    get: ({get}) => {
        const todos = get(TodoAtom)
        const filterTodosString = get(FilterTodoAtom)
        console.log(todos, filterTodosString)
        return todos.filter((todo) => {
            return todo.title.includes(filterTodosString) || todo.description.includes(filterTodosString)
        })
    }
})