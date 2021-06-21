import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Cadastro from './Components/Cadastro'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'

export default function MainRoutes ( ){
    return (
        <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/dashboard" element ={<Dashboard/>} />
            <Route path="/cadastro" element ={<Cadastro/>} />
        </Routes>
    )
}