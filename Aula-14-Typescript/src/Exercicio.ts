/* ex 1 */
let notas: number[] = [1, 2, 3, 4];
function calcularMedia(notas: number[]): number {
    let soma = 0;
    try {
        for (let i = 0; i < notas.length; i++) {
            let nota = notas[i]
            if (nota) {
                soma += nota; // erro: nota undefined
            }
        }
    } catch {
        for (let nota of notas) {
            soma += nota;
        }
    }
    return soma / notas.length;
}
/* ex 2 */
function cadastrarUsuario(nome: string, idade: number) {
    if (nome.length === 0 || idade < 0) {
        throw new Error("Dados inválidos");
    }
    console.log("Usuário cadastrado!");
}
/* ex 3 */
function executarOperacao() {
    try {
        throw "Erro genérico ";
    } catch (erro: unknown) {
        if (erro instanceof Error) {
            console.log("Erro:", erro.message);
        }
    }
}
/* ex 4 */
class Pessoa {
    constructor(
        public nome: string,
        public email: string,
        public dataNascimento: string
    ) { }

    validarNome(): void {
        if (this.nome.charAt(0) === " " || this.nome.charAt(this.nome.length - 1) === " ") {
            throw new Error("O nome possui espaços no início ou fim.");
        }
        this.nome = this.nome.toUpperCase();
    }

    validarEmail(): void {
        if (this.email.indexOf("@") === -1 || this.email.indexOf(".com") === -1) {
            throw new Error("Email deve conter @ e .com");
        }
    }

    validarDataNascimento(): void {
        if (this.dataNascimento.length !== 10 || this.dataNascimento.charAt(2) !== "/" || this.dataNascimento.charAt(5) !== "/") {
            throw new Error("Formato de data inválido. Use DD/MM/yyyy.");
        }
        let anoNascStr = this.dataNascimento.slice(6);
        let anoNasc = Number(anoNascStr);
        let anoAtual = new Date().getFullYear();
        if (anoAtual - anoNasc >= 100) {
            throw new Error("A pessoa deve ter menos de 100 anos.");
        }
    }
}

/* slice, Number(), */