import fetch from 'node-fetch';
const URL = 'https://api.escuelajs.co/api/v1'

function fetchData(URL){
    return fetch(URL);
}

fetchData(`${URL}/products`)
    .then(response => response.json())//convirtiendo respuesta a json
    .then(productos => {
        console.log(productos[0])//mostrando detalle de producto en formato json
        return fetchData(`${URL}/products/${productos[0].id}`);// retornar el id del producto
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)//mostrar titulo con id retornado anteriormente
        console.log(product.price)// mostrar precio con id retornado anteriormente
        console.log(product.images[0])//mostrar img con id retornado anteriormente
        return fetchData(`${URL}/categories/${product.category.id}`);// retornar el id de la categoria del producto seleccionado
    })
    .then(response => response.json())
    .then(categoria => {
        console.log(categoria.name);
    })
    .catch(error => console.log(error))// Error si no logra resolver la promesa
    .finally(() => console.log('PETICION FINALIZADA'))//mensaje o ejecucion de algo cuando termine todo, aun asi sea un error o una promesa resuelta