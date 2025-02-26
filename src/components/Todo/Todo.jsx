import Counter from "../Counter/Counter.jsx"
import { ACTIONS } from "../../App.jsx";
import css from "./Todo.module.css"
export default function Todo ({todo, dispatch}) {
    return <div className={css.todo}>
        <span style={{color: todo.complete? "#AAA" : "#000"
        }}>
            {todo.name}</span>
            <Counter/>
            <button onClick={() => {dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}}>Toggle</button>
            <button>Complete</button>
    </div>
}

