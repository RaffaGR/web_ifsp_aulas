// 1
class Livro_exercicio {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    editora: string;

    constructor(titulo: string, autor: string, anoPublicacao: number, editora: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.editora = editora;
    }

    exibirDados() {
        return `titulo: ${this.titulo}\nautor: ${this.autor}\n anoPublicacao: ${this.anoPublicacao}\n editora: ${this.editora}. `
    }
}
// 2
const livro1 = new Livro_exercicio("Livros egipcios", "Rafael", -9999, "Utlas");
const livro2 = new Livro_exercicio("Livros UmasTariLization", "Rafael", -9999, "Utlas");

console.log(livro1.exibirDados());
console.log(livro2.exibirDados());

// 3
class Usuario {
    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }

    boasVindas() {
        console.log(`Bem-vindo(a), ${this.nome}! Seu e-mail é ${this.email}.`)
    }
}

const pessoa = new Usuario("Alguem", "algo@quem?")
pessoa.boasVindas();

// 4
class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrarCarro() {
        console.log(`Marca: ${this.marca}! Modelo: ${this.modelo}! Ano: ${this.ano}`)
    }
}

const Ferrari = new Carro("Ferrari", "Veiculo", 2001);

Ferrari.mostrarCarro()

Ferrari.marca = "Ferrari 2.0";
Ferrari.modelo = "Veiculos de 5 rodar com turbo";
Ferrari.ano = 2020;

Ferrari.mostrarCarro()

// 5
// COMPLETE O CODIGO ABAIXO:
// classe Produto
export class Produto {
    nome: string
    preco: number
    constructor(nome: string, preco: number) { // completado
        this.nome = nome
        this.preco = preco
    }
    mostrarInformacoes(): void {
        // exibe nome e preco
        console.log(`${this.nome} \n ${this.preco}`) // completado
    }
}
// uso da classe
const prod = new Produto("Notebook", 3500)
prod.mostrarInformacoes(); // completado