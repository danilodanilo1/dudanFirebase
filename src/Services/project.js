export default function Projects(token) {


    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token, }
        // body: JSON.stringify(body)
    };

    const url = 'http://localhost:4000/projects'

    

    return fetch(url, requestOptions)
    .then(data => data.json())
    .then(response => response)
}
