import React from "react";

export const User=(props)=>{

    const { data } = props
    return(
        <div>
            <h1>User Redux </h1>
            <h4>{data.name}</h4>
            <h5>{data.age}</h5>
        </div>
    )
}