import React, {useState} from 'react'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom'
import { RiArrowGoBackFill } from 'react-icons/ri';
import Cadastrar from '../../Services/cadastrar';
import firebase from 'firebase/app'

export default function Cadastro() {
    

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const navigate = useNavigate()
    const db = firebase.firestore()
    const [user, setUser] = useState({name, email, password})

    const validate = () => {
        
        if(password !== confirm){
            alert('Senhas não conferem.')
        }else{
            sendNewUser()
        }
    }


    const sendNewUser = async () => {
            const result = await firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(function(result) {
                console.log('updating')
                return result.user.updateProfile({
                  displayName: name
                })
              }).catch(function(error) {
                console.log(error);
              });

    }


    return (
        <div className="content">
            <div className="wrapper" >
                <h1 className="h1c">Cadastre-se na B.Project</h1>

                <input onChange={(e)=>setName(e.target.value)} placeholder="Nome Completo" className="input"/>
                <input onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="input"/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="input"/>
                <input type="password" onChange={(e)=>setConfirm(e.target.value)} placeholder="Confirmar" className="input"/>
                <Link to={'/'} className="linkBack" >
                    <div className="linkBack">
                        <RiArrowGoBackFill/>
                        Voltar
                    </div>
                </Link>
                <button className="buttonEnviar" onClick={()=>validate()}>Enviar</button>
            </div>
        </div>
    )
}
