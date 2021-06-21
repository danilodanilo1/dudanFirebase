import React, { useState } from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [login, setLogin] = useState({})
    const [project , setProject ] = useState({})
    
    return (
        <AuthContext.Provider value={{
            login,
            setLogin, 
            project , 
            setProject
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}