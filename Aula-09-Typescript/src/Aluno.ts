export class Aluno {
    public nome: string;
    public idade: number;
    public curso: string;
    public matricula: string;

    constructor(nomeX: string, idade:number, curso: string, matricula: string){
        this.nome = nomeX;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    imprimir():void {
        console.log(`${this.nome}\n ${this.idade}\n ${this.curso}\n ${this.matricula}`)
    }
}