/*Estructuras de Datos
Tipos de Números en Arreglo
• Almacene en un arreglo de dimensión N, números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay
56
Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 ceros*/

let dimensionN: number = Number(prompt(" ingrese dimension"));
let arreglo: number[] = new Array(dimensionN);
let contadorPositivo = 0;
let contadorNegativo = 0;
let contadorCero = 0;
let i = 0;

for (let i: number = 0; i < dimensionN; i++) {
  arreglo[i] = Number(prompt("ingresar un numero"));

  if (arreglo[i] === 0) {
    contadorCero = contadorCero + 1;
  } else if (arreglo[i] < 0) {
    contadorNegativo = contadorNegativo + 1;
  } else if (arreglo[i] > 0) {
    contadorPositivo = contadorPositivo + 1;
  }
}

console.log(" en la lista hay:" + contadorCero + " ceros");
console.log(" en la lista hay:" + contadorPositivo + " numeros positivos");
console.log(" en la lista hay:" + contadorNegativo + " numeros negativos");

console.log(" los numeros ingresados son ", arreglo);
