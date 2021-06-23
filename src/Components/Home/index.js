import React, {useContext, useState} from 'react'
import './styles.css'
import Login from '../../Services/login'
import { AuthContext } from '../../ContextApi/provider'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {BiShow} from 'react-icons/bi'
import {BiHide} from 'react-icons/bi'
import Api from '../../Api'
import GoogleLogin from 'react-google-login'
import Dashboard from '../Dashboard'
import firebase from 'firebase/app'

export default function Home() {
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const {login, setLogin} = useContext(AuthContext)
    const [showPassword, setShowpassword] = useState(false)
    const [usersDaTabela, setUsersDaTabela] = useState([])
    const navigate = useNavigate()
    
    const logar = async () => {

            const result = await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log(result)
            if(result){
                    setLogin(result)
                    navigate("/dashboard")
                }else{
                    setErrorMsg("erro ao logar")
                }
    }
    const showEye = ()=>{
        if(!showPassword){
            return <BiShow className="imgPass" onClick={()=>setShowpassword(!showPassword)}/>
        }else{
            return <BiHide className="imgPass" onClick={()=>setShowpassword(!showPassword)}/>
        }
    }
    const actionLoginGoogle = async ( )=> {
        let result = await Api.googleLogar()
        if(result.user){
            setLogin(result)
            navigate("/dashboard")
        }else{
            setErrorMsg("erro ao logar")
        }
    }
    //post na tabela
    // const postfunc = ()=> {
    //     firebase.firestore().collection("cadastro").add({
    //         email:"dani@lo4.com",
    //         nome:"danilo4",
    //         password:"1234"
    //     }).then(console.log('ok')).catch(console.log('erro'))
    // }
    // update no usuario
    // const setfunc = ()=> {
    //     firebase.firestore().collection("cadastro").doc('h5zHGyTKE1vrJ7oXbcuo').set({
    //         email:"dani@lo7.com",
    //         nome:"danilo7",
    //         password:"1237"
    //     }).then(console.log('ok')).then(
    //         getfunc()
    //     )

    // }
        // get na tabela cadastro
        // const getfunc = ()=> {
        //     firebase.firestore().collection("cadastro").doc('1ADECgjAWRACEiq4Ksvl').onSnapshot((doc)=>
        //     console.log(doc.data())
        //     )
    
        // }
    

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

                <button
                    onClick={()=> actionLoginGoogle()}
                >logar com google</button>
            </div>
        </div>
    )
}
