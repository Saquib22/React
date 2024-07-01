import logo from './logo.svg';
import './App.css';
import DogCard from './DogCards';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';
import Counter from './Counter';
import Todo from './Todo';
import ArrayTodo from './ArrayTodo';
import Avatar from './Avatar';
import { useState } from 'react';
import Counting from './Counting';
function App() {
  // const obj = { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfmvhwwwQaN_c0DWYGvZPp2yM5T2iedrMjMSd8zav5w&s",
  // width :"200px",
  // height :"200px"}
  const[todo] = useState(['todo 1','todo 2'])
  return (
    <div className="App">
     {/* <Counter /> */}
     {/* <Todo/> */}
     {/* <ArrayTodo /> */}
      {/* <Avatar 
        {...obj}
      />

      <Avatar  src ="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
      width = "200px"
      height="200px"/>
      <Avatar 
      src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711238400&semt=ais"
      height="200px"
      width="200px"
      >
        <span>children </span>
      </Avatar> */}

      {/* {todo.map((v,ind)=> <li key={ind}>{v}</li>)} */}
      <Counting />
    </div>
  );
}

export default App;
