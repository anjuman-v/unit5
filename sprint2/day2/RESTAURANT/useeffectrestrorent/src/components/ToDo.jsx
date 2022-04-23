
import {v4 as uuid} from "uuid"

import React, { useState } from "react";
import { ToDoInput } from "./ToDoInput";
import { ToDosItems } from "./ToDoItems";

function ToDo(){
    const [todos, setTodos] = useState([]);

    
    const getData = (data) => {

        const payload = {
            title: data,
            id: uuid(),
            status: false
        }

        setTodos([...todos, payload])
    }

    
    return (
        <div>
            <ToDoInput handleData = {getData}></ToDoInput>
            {todos.map((e) => {
                return <ToDosItems id={e.id} status= {e.status} key={e.id} title= {e.title}></ToDosItems>
            })}
        </div>
    )

}

export {ToDo};