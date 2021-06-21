import React, {useContext, useEffect, useState} from 'react'
import './styles.css'
import Login from '../../Services/login'
import { AuthContext } from '../../ContextApi/provider'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {BiShow} from 'react-icons/bi'
import {BiHide} from 'react-icons/bi'

export default function Home() {
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const {login, setLogin} = useContext(AuthContext)
    const [showPassword, setShowpassword] = useState(false)
    const navigate = useNavigate()
    
    const logar = async () => {

            const response = await Login({email, password})
            
            if(response.token){
                setLogin(response)
                navigate("/dashboard")
            }else{
                setErrorMsg(response.error)
            }
    }
    const showEye = ()=>{
        if(!showPassword){
            return <BiShow className="imgPass" onClick={()=>setShowpassword(!showPassword)}/>
        }else{
            return <BiHide className="imgPass" onClick={()=>setShowpassword(!showPassword)}/>
        }
    }
    

    return (
        <div className="content">
            <div className="wrapper" >
                <h1 className="h1">B. Project</h1>
                <p className="p">Sign in and start managing your employes!</p>

                <input onChange={ function (evento){ setEmail(evento.target.value)} } placeholder="Login" className="input"/>
                <div className="contentPass">
                    <input type={showPassword?'text':'password'} onChange={ (e) => setPassword(e.target.value)} placeholder="Password" className="input"/>
                    {showEye()}
                </div>
                
                {errorMsg && (<p className="error">{errorMsg}</p>)}

                <Link to="/cadastro" className="link">Cadastre-se</Link>
                
                <button className="buttonHome" onClick={()=>logar()}>Login</button>
            </div>
        </div>
    )
}
