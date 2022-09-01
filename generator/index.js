function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterador(arr){
    for(let nombre of arr){
        yield `tu nombre es: ${nombre}`
    }
}

const it = iterador(['Daniel','Melany','Osorio','Ana','Luis']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);