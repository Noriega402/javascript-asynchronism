import fetch from 'node-fetch';
const URL = 'https://api.escuelajs.co/api/v1';

async function getData(api){
    const response = await fetch(api);
    const data = await response.json();
    return data;
}

async function* itData(){
    try{
        const products = await getData(`${URL}/products`);

        const product = await getData(`${URL}/products/${products[0].id}`);
        yield console.log('Nombre Producto: '+product.title);

        const category = await getData(`${URL}/categories/${product.category.id}`);
        yield console.log('Categoria: '+category.name);

        setTimeout(function(){
            console.log('La ejecucion del generador finalizo hace 2 segundos...');
        },2000);

    }catch(error){
        console.error(error);
    }
}

const g = itData();

g.next();
g.next();
// g.next();