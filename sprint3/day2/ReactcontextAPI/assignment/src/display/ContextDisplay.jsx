import { useContext } from "react";

import { AuthContext } from "../context/AuthContect";

export const DisplayStatus = () => {
    const {auth} = useContext(AuthContext)  

    return(
        <h2>user is {auth?"login":"logout"}</h2>
    )
}










