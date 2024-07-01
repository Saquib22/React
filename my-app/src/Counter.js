import {useState} from 'react';
function Counter(){
    const[x,setX] = useState(0)
   return(
    <>
    count x: {x} is {(x%2 ==0) ? 'Even' : 'Odd'}
    <button onClick={()=>setX(x+1)}>Inc</button>
    <button onClick={()=>{
    if (x<=0) {
       alert("negative"); 
    }
    else{
        setX(x-1)
    }}}>Dec</button>
    </>
   )
}
export default Counter;