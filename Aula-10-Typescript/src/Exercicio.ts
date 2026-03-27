// 1
type Categoria = "Espadachim" | "Mago" | "Arqueiro";

class Heroi {
    //atributos em comum
    nome: string;
    categoria: Categoria;
    // acao: string;
    ataque: number;
    custo: number;

    // stamina: number; 
    recurso: number;
    nomeRecurso: string;

    constructor(nome: string, categoria: Categoria, ataque: number, custo: number) {
        this.nome = nome;
        this.categoria = categoria;

        this.ataque = ataque;
        this.custo = custo;

        // this.acao = atacar;
        // this.stamina = 100; 

        if (categoria === "Espadachim") {
            this.recurso = 50;
            this.nomeRecurso = "stamina";
        } else if (categoria === "Mago") {
            this.recurso = 40;
            this.nomeRecurso = "mana";
        } else if (categoria === "Arqueiro") {
            this.recurso = 10;
            this.nomeRecurso = "flechas";
        } else {
            this.recurso = 0;
            this.nomeRecurso = "recurso indefinido";
        }
    }

    atacar() {

        /* 
        //atributos unicos
        // espadashin
        let arma: number = this.ataque * 5; // influencia o ataque
        let armadura: number;
        let honra: number;
        let reino: number;

        // mago
        let mana: number = 10; // influencia o ataque
        let grimorio: number = 10;  // influencia o ataque
        let elemento: number = 2; // influencia o ataque
        let nivelArcano: number; // influencia o ataque
        let familia: number;

        // arqueiro
        let flechas: number = 3;  // influencia o ataque
        let tipoArco: number = 2; // influencia o ataque
        let precisao: number = this.stamina / this.custo; // influencia o ataque
        let camuflagem: number = this.stamina;
        let regiao: number;

        switch (categoria) {
            case 'Espadashin':
                arma = 1
                armadura = 1;
                honra = 1;
                reino = 1;
                break;
            case "Mago":
                break;
            case "Arqueiro":
                this.stamina = 100;
                break;
            default:
                this.stamina = 100;
                console.log("Não é uma categoria valida")
                break;
        }
        */

        // modulação adicional...
        this.exibirDados();
    }


    exibirDados() {
        if (this.recurso >= this.custo) {
            this.recurso -= this.custo;
            console.log(`Ataque de ${this.nome} bem sucedido, restando ${this.recurso} de ${this.nomeRecurso}`);
        } else {
            console.log(`Ataque de ${this.nome} falhou por falta de recurso`);
        }
    }
}

// Espadachim = atacar/defender/treinar
// Mago = atacar/conjurar/meditar
// Arqueiro = atacar/mirar/esconder

const espadachim: Heroi = new Heroi("Gilberto Barros", "Espadachim", 20, 10);
espadachim.atacar();
// Ataque de Gilberto Barros bem sucedido, restando 40 de stamina