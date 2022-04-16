console.clear();
// *********************************************
// Función recursiva incrementa
// *********************************************

console.log("función recursiva incrementa");
function recursiva(inicio, fin) {
  if (inicio === fin) {
    console.log(fin);
    return;
  } else {
    console.log(inicio);
    return recursiva(inicio + 1, fin);
  }
}

recursiva(1, 10);
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// *********************************************
// Función recursiva decrementa
// *********************************************

console.log("función recursiva decrementa");

let cuentaAtras = (numero) => {
  //base case
  if (numero === 0) {
    return;
  }
  console.log(numero);
  return cuentaAtras(numero - 1);
};
cuentaAtras(5); // 5, 4, 3, 2, 1

// *********************************************
// Función sucesión de fibonnaci
// *********************************************

console.log("función recursiva fibonacci");

function secuenciaFibonacci(n) {
  for (let index = 0; index < n; index++) {
    console.log(funcionFibonacci(index));
  }

  function funcionFibonacci(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    if (n > 1) {
      return funcionFibonacci(n - 1) + funcionFibonacci(n - 2);
    }
  }
}
//Introducir un número aquí para ver en consola secuencia fibonacci
secuenciaFibonacci(10);

// *********************************************
// Función recursiva es par o impar
// *********************************************

console.log("función recursiva par o impar");
let parImpar = (numero) => {
  if (numero === 0) {
    return "Par";
  } else if (numero === 1) {
    return "Impar";
  } else {
    return parImpar(numero - 2);
  }
};
console.log(parImpar(20)); // Par
console.log(parImpar(75)); // Impar
console.log(parImpar(98)); // Par
console.log(parImpar(113)); // Impar
