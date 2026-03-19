// assycrono
// console.log("Antes do timeout...");

// setTimeout(()=> console.log("Executando o timeout..."), 2000);

// console.log("Depois do timeout...");

// sicrono
// console.log("Antes do interval...");
// let frase = "Condição especifica";

// const timeout = setInterval(()=> console.log("Executando o interval..."), 2000);

// frase = "Mudou";
// if(frase != "Condição especifica") {
//     clearTimeout(timeout);
// }
// console.log("Depois do interval...");

// console.log("Antes do interval...");
// let frase = "Condição especifica";

// let minutos = 0;
// const timing = setInterval(()=> {
//     minutos++;
//     console.log(`Passou ${minutos} minutos...`);
// }, 60000);

// console.log("Depois do interval...");

// --
console.log("Antes do interval...");

let contador = 0;
const interval = setInterval(()=> {
    contador++;
    console.log("Rodando o interval");
    if(contador === 3){
        console.log("3 execuções");
        clearInterval(interval);
    }
}, 500);

console.log("Depois do interval...");