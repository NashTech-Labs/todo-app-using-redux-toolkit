import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo, clearTodos, deleteTodo } from "./todoSlice";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Todo(){
    const [newtodo,setNewTodo] = useState('')
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todoSlice.todos)

    console.log(todo)

    function handleChange(e){
        setNewTodo(e.target.value)
    }

    function handleAddition(){
        dispatch(addTodo(newtodo))
        setNewTodo('')
    }

    function removeTodos(){
        dispatch(clearTodos())
    }
    return(
        <>
            <h2>Add todo</h2>
            <div className="">
                <input type="text" onChange={handleChange} value={newtodo}></input>
                <button className="btn" onClick={handleAddition}>Add</button>
                <button className="btn" onClick={removeTodos}>Remove all</button>
            </div>
            <div className="todo-list">
                {
                    todo.map(item => {
                        return <li key={item}>{item}
                        <DeleteIcon onClick={() => dispatch(deleteTodo(item))}/>
                        </li>
                    })
                }
            </div>
            
        </>
    )
}