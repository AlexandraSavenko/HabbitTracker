
import { useEffect, useReducer, useState } from 'react'
import './App.css'
import Todo from './components/Todo/Todo';

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo"
}
const myTodos = window.localStorage.getItem("mytodos")

function reducer (todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id){
          return {...todo, complete: !todo.complete}
        }
        return todo
      })
      default:
      break;
  }

}
function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, JSON.parse(myTodos) || [])
const [name, setName] = useState("")

useEffect(()=> {window.localStorage.setItem("mytodos", JSON.stringify(todos))
}, [todos])

function handleSubmit(e){
  e.preventDefault()
  dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
  setName("")
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        What is your next big plan: </label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </form>
    <div className="todoBox">
    {todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch}/>)}
    </div>
    </div>
  )
}

export default App
