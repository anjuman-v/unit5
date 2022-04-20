import React, { useState } from 'react'
import Todo from './Todo'

export default function TodoList() {
    const [todo, setTodo] = useState([

    ]);
    const getData=(text)=>{
     setTodo([...todo, text]);
    }
    console.log(todo)
  return (
    <div>
     <Todo  getData={getData} />
      <div className='container'>
      {
         todo.map((elem)=>(
           
 <div className="input-group mb-3 todoAddinput formedInput">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
  </div>
 
  <div className="ms-4">{elem}</div>
</div>
         ))
        }
      </div>
    
    </div>
  )
}