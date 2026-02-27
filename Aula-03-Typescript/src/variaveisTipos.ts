/* npx ts-node src/variaveisTipos.ts */

let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;

console.log(nome);
let dado: any;
let vazio: null = null;
let undefinido: undefined = undefined;

let situacao: "ativo" | "inativo" = "ativo";

let idadeNumero: number | null = null;
let idadeNumero2: string | null | 3 = 3;

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);

let valor = 42;
console.log(typeof valor);