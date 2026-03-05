for(let i = 0; i < 5; i++){
    console.log(`iteração: ${i}`)
}

let contador = 0;
while (contador < 5) {
    console.log(`iteração: ${contador}`);
    contador++;
}

do {
    console.log(`iteração: ${contador}`)
    contador++;
    // desenvolvimento...
}while(contador < 3);

const numeros = [10, 20, 30];

for(const num of numeros){
    console.log("Numeros: ", num);
}

const pessoa = {nome: "Anisio", idade: 25, cidade: "Boituva"};
for( const chave in pessoa){
    console.log("Chave: ", chave);
}















