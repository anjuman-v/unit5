import React from 'react'
import { useState } from 'react'


export default function Todo({getData}) {
    const [text, setText] = useState("")
    const handleChange =(e)=>{

        setText(e.target.value)
    }
  return (
    <div className='container todoAdd App'>
  <div className="input-group todoAddinput mb-3">
  <input type="text" className="form-control" onChange={handleChange} placeholder="Add Todo.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary" type="button" onClick={()=>{
      getData(text);
    
  }} id="button-addon2">Add Todo</button>
</div>

    </div>
  )
}