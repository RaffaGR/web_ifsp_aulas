const frutas: string[] = ["Maça", "Banana", "Uva"];
const numeros: number[] = [1,2,3,4,5];

let contador: number = 0;
// frutas.forEach((item,index) => {
//     console.log(`${index}: ${item}`)
// })
// numeros.forEach((item,index) => {
//     contador+= item
// })
numeros.forEach((item, index) => numeros[index] = item * 2); // (oq n se pode fazer msm funcionando vai contra as regras mesmo funcionando tem riscos)

console.log(numeros)