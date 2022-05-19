

const marcas = ['audi','bmw', 'mazda', 'seat', 'honda'];

marcas.push('acura'); // agregamos acura al final

console.log(marcas); // comprobamos

for (let index = 0; index < marcas.length; index++) {
    
    console.log(marcas[index]);
    
}

marcas.pop(); // quitaria el ultimo que es acura

console.log(marcas); // comprobamos

marcas.shift(); // quitaria el primero que es audi

console.log(marcas); // comprobamos

//desde aqui todo toma tira datos con las modificaciones anteriores

console.log(marcas.slice(2,3)); // mostramos que hay desde la posicion 2 hasta la 3, pero esto con las modificaciones anteriores

console.log(marcas.indexOf('mazda')); // nos dice en que posicion esta mazda

