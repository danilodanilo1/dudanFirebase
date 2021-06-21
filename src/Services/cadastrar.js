export default function Cadastrar({name, email, password}) {

    const body={
            "name": name,
            "email": email,
            "password": password,
            // "isAdmin": false
        }


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    };

    const url = 'http://localhost:4000/register'

    

    return fetch(url, requestOptions)
    .then(data => data.json())
    .then(response => response)
}
