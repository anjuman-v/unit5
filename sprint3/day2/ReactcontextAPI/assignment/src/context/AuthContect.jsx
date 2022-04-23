import { useState, createContext } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ Children }) =>{



const [auth, setAuth]  = useState(false)

function isAuth(){
    setAuth(!auth)
}
function toggleAuth(){
    auth ? console.log("logedin succsec"):console.log("logout sucess")
}

return(
<AuthContext.Provider value={{isAuth, auth, toggleAuth}}>

{Children}

</AuthContext.Provider>


)

}

