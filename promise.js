// Una promesa tiene 3 estados:
// - pendiente: es cuando se esta ejecutando
// - cumplido: es cuando regreso o logro obtener la info deseada
// - rechazado: es cuando no logro obtener la info que se pidio

// contado de vacas en la granja
const cows = 8;

// definimos y declaramos una variable con una promesa
const PROMISE = new Promise((resolve, reject) => {

    // Si el numero de vacas es mayor a 10 se muestra el resolve
    if(cows > 10){
        resolve('Tiene mas de 10 vacas, puedes vender algunas para generar mas ganancias');
    } //Si el numero de vacas es menor a 10 se muestra el reject
    else{
        reject('No tienes mas de 10 vacas, necesitaras un milagro para poder seguir con el negocio...');
    }
});

// .then es para saber si a promesa se cumplio, es deci, si es verdadera o pudo resolverse
PROMISE.then(result => {
    console.log(result);
})
// .catch es para saber si hubo un error o no se logro cumpli la promesa
.catch(error => {
    console.log(error);
});

export default PROMISE;