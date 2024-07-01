import { useState } from "react";


function Counting(){
    const[x,setX] = useState(1)
    return(
        <>
        count x: {x} is {(x%2 ==0) ? 'Even' :'Odd'}
        <button onClick={()=>setX(x+1)}>Inc</button>
        <button onClick={()=>setX(x-1)}>Dec</button>
        </>
    )
}
export  default Counting;