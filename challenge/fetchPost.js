import fetch from "node-fetch";
const URL = 'https://api.escuelajs.co/api/v1';

// ADD DATA
const data = {
    "title": "New Product Test",
    "price": 8010,
    "description": "A description for Daniel Noriega",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

function postData(URL,data){
    const response = fetch(URL, {
        method: 'POST', // metodo para obtener en el fetch
        mode: 'cors', //investigar
        credentials: 'same-origin', //investigar
        headers:{
            'Content-Type': 'application/json' //cabeceras que se envian
        },
        body: JSON.stringify(data)//transforma el JSON a un texto
    });
    return response;
};

postData(`${URL}/products/`,data)
.then(response => response.json()) //transformar data en json
.then(data => console.log(data)) //mostrar data en consola
.catch(error => console.log(error)) //en caso de error


// UPDATE DATA
const update = {
    "title": "Change title Daniel",
    "price": 1750
};
const idUpdate = 218;

function updateData(URL,data){
    const response = fetch(URL, {
        method: 'PUT',
        mode:'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(update)
    });
    return response;
};

updateData(`${URL}/products/${idUpdate}`,update)
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))