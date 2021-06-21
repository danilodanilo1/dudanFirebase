import React, { useState } from 'react'


export default function Login({email, password}) {

    const body = {
        email: email,
        password: password
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    const url = 'http://localhost:4000/auth'

    

    return fetch(url, requestOptions)
    .then(data => data.json())
    .then(response => response)
}


    
    
    

