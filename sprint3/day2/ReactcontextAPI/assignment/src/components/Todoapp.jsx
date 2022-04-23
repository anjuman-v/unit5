import React from "react";

import { useState } from "react";

export const Todoapp = ({dataHadler}) => {

  const [name, setName] = useState("") 

  function onChangeHandler(){
    dataHadler(name)
  }
  return(
    <div>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} />
     <button onClick={() => {
      onChangeHandler()
     }}>submit</button>
    </div>
  )
}
  