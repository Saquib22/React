import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  let [counter,setCounter]=useState(0);

  const incValue=()=>{
    setCounter(counter++);
  }
  const decValue=()=>{
    setCounter(counter--);
  }
  
  return (
    <>
    <h2>Welcome to My Counter :{counter}</h2>
    <button onClick={incValue}>IncValue</button>
    <button onClick={decValue}>DecValue</button>
    
    </>
   
  );
}

export default App;
