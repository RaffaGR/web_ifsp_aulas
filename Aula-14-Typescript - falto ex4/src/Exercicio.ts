/* ex 1 */
let notas: number[] = [1, 2, 3, 4];
function calcularMedia(notas: number[]): number {
    let soma = 0;
    try {
        for (let i = 0; i < notas.length; i++) {
            let nota = notas[i]
            if (nota) {
                soma += nota; // a nota considerada undefined
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
        // implementar
    }

    validarEmail(): void {
        // implementar
    }

    validarDataNascimento(): void {
        // implementar
    }
}