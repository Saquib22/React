import { useState } from "react";
function Todo(){
    const[isEditing,setisEditing]= useState(false)
    return(
        <>
        {
            (isEditing) ? <input /> : <p>some TOdos</p>
        }
        <br />
        <button onClick={()=> setisEditing(!isEditing)}>click</button>
        </>
    )
}
export default Todo;