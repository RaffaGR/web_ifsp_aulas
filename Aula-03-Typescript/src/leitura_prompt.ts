import PromptSync = require("prompt-sync");

const prompt = PromptSync();

const nome:string = prompt("Digite seu nome: ");
const idade: number = Number(prompt("Digite sua idade: "));

console.log(`Olá, ${nome}! Voce tem ${idade} anos.`);