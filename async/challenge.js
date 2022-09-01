import fetch from "node-fetch";
const URL = 'https://api.escuelajs.co/api/v1';

async function fetchData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const anotherFn = async url => {
    try {
        const products = await fetchData(`${URL}/products`);
        const product = await fetchData(`${URL}/products/${products[0].id}`);
        const category = await fetchData(`${URL}/categories/${product.category.id}`);

        console.log(product); // mostrando todo lo del primer producto
        console.log(product.title); //mostrando solo el titulo
        console.log(category.name); //mostrando el nombre de la categoria del producto
    } catch (error) {
        console.error(error);
    }
}

anotherFn(URL);