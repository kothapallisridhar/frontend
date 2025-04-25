import React from 'react'
import { use } from 'react'
import { useState } from 'react'

const ToDo = () => {

  const [todo, updateInput] = useState("todo")  
  const [todos, updateTodos] = useState([{id: 1, task: 'Learn React'},{id: 2, task: 'Learn R3F'},{id: 3, task: 'Develope Spring Boot App'}])
  let nextId = 3
  function addTodo() {
    if(todo == "") {
        alert("Add a todo")
    } else {
        
        updateTodos([...todos, {id:nextId++, task: todo}])
        updateInput('')
    }
  }

  function deleteTodo(id) {
    let updatedTodos = todos.filter(todo => {
        return todo.id != id
    })
    updateTodos(updatedTodos)
  }

  return (
    <div className='container mt-5 w-50'>
        <h3 className='text-center'>ToDo List</h3>
        <div className='input-group'>
            <input type="text" className='form-control' value={todo} onChange={(e) => {
                updateInput(e.target.value) 
            }}/>
            <button className='btn btn-primary' onClick={()=> addTodo()}>Add</button>
        </div>
        <ul className='list-group mt-4'>
            {todos.map(todo => <li className='list-group-item'>{todo.task} <button className='btn' onClick={() => deleteTodo(todo.id)}>❌</button></li>)}
        </ul>
    </div>
  )
}

export default ToDo