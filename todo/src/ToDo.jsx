import React, { useState } from 'react'

const ToDo = () => {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if(todo.trim() === '') return;
    setTodos([...todos, todo]);
    setTodo('');
  }
    
  return (
    <div>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter Todo'/>
        <button onClick={handleAdd}>Todo</button>
        <ul>
            {todos.map((t, index) => <li key={index}>{t}</li>)}
        </ul>
    </div>
  )
}

export default ToDo