import { Paciente } from "./Paciente"
import { Medico } from "./Medico"

export class Prontuario {
    paciente: Paciente
    medico: Medico

    constructor(paciente: Paciente, medico: Medico) {
        this.paciente = paciente;
        this.medico = medico;
    }

    exibir(): void {
        console.log(`${this.paciente.pessoa.nome}, ${this.medico.pessoa.nome} e essa lista de remedios`)
        this.paciente.remedios.forEach(element => {
            console.log(`${element.nome}`)
        });
    }
}

let nome = "Teste"
let idade = 10
let telefone = "12345678910"
let email = "Teste@email"
let rua = "rua"
let numero = 11
let cidade = "cidade"
let cep = "15115151"

type remedios = [
    "test",
    "test",
    "test",
    "test"
]

import { Contato } from "./Contato"
import { Endereco } from "./Endereco"
import { Pessoa } from "./Pessoa"
import { Remedio } from "./Remedio"

const enderecoP = new Endereco(rua, numero, cidade, cep)
const contatoP = new Contato(telefone, email)
const pessoaP = new Pessoa(nome, idade, enderecoP, contatoP)
const remedios = [
    new Remedio("Paracetamol", "500mg"),
    new Remedio("Ibuprofeno", "200mg")
]
const paciente = new Paciente(pessoaP, remedios)


const enderecoM = new Endereco("Rua dos Médicos", 456, "Boituva", "18550-000")
const contatoM = new Contato("(15) 9876-5432", "medico@email.com")
const pessoaM = new Pessoa("Dr. Mario Oiivaria", 33, enderecoM, contatoM)

const medico = new Medico(pessoaM, "Cardiologia")

const teste = new Prontuario(paciente, medico)

teste.exibir();