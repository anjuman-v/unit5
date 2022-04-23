import { useState } from "react"

export const ToDoInput = ({handleData}) => {
    const [text, setText] = useState(" ")

    return (
        <div>

            <input type="text" onChange={(e) => {
                setText(e.target.value);
            }} />
            <button onClick={()=>{
                handleData(text)
            }}>Add ToDo</button>

            

        </div>

    )
}