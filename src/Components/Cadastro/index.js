import React, {useContext, useEffect, useState} from 'react'
import './styles.css'
import { Link, useNavigate } from 'react-router-dom'
import { RiArrowGoBackFill } from 'react-icons/ri';
import Cadastrar from '../../Services/cadastrar';

export default function Cadastro() {
    

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [response, setResponse] = useState({})
    const navigate = useNavigate()

    const validate = () => {
        
        if(password !== confirm){
            alert('Senhas não conferem.')
        }else{
            sendNewUser()
        }
    }


    const sendNewUser = async () => {

            const response = await Cadastrar({
                name,
                email,
                password,
            })
            console.log(response)
            
            if(response.token){
                alert('Usuário criado com sucesso')
                return navigate('/')
            }else{

                return alert(response.error)
            }
        
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
