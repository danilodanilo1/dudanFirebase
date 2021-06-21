import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../ContextApi/provider'
import Projects from '../../Services/project'


export default function Dashboard() {
    const{login, setLogin } = useContext(AuthContext)
    const [projects, setProjects] = useState({})
    const {user} = login
    const navigate = useNavigate()
    const logOut = () => {
        setLogin({})
        return navigate('/')
    }
    const initialData = () => {
        Projects(login.token)
        .then(setProjects)
    }
    useEffect(() => {
        if(!login.user){
            return navigate('/') 
        }
    })
    useEffect(()=>{
        initialData()
    },[])
    console.log(projects)
    return (
        <div>
            <p>{user.name}</p>
            <button onClick={() => logOut()}>Sair</button>
        </div>
    )
}
