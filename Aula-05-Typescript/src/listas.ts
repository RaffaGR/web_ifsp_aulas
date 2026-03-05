let numbers: number[] = [1, 2, 3, 4, 5];

let nomes: string[] = ["Ana", "Anisio", "Raul", "Mequetrefe"];

let posExistRaul = nomes.indexOf("Raul");

// nomes.splice(1); // corta o resto
nomes.splice(1,1);
// nomes.splice(1,2);

console.log(nomes);

let idade: Array<number> = [20, 30, 40];

let mist: (number | string)[]= [1, "dois", 3, "quatro"];

nomes.push("Rafael");
nomes.unshift("Aldaberto") // muitas vezes o ; n é obrigatorio
nomes.pop();
nomes.shift();

console.log(nomes[0]);
console.log(nomes.length);
