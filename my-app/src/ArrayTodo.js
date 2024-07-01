import { useState } from "react"
function ArrayTodo(){
    const[todos, setTodos] = useState(['todo1' ,'todo2'])
    return(
        <ul>
            {todos.map((todo) => <li>{todo}</li>)}
            <button onClick={()=> setTodos([...todos,'another one '])}>click</button>
        </ul>
    )
}
export default ArrayTodo;