function mensagem(f: string): string {
    return f;
}

function soma(a: number, b: number): void {
    console.log(a + b);
}

function saudacao(nome: string = "Visitante"): string {
    return `Olá, ${nome}!`;
}

function multiplicar(a: number, b: number): number {
    return a * b;
}

// Retorno implícito: sintaxe concisa para funções de uma linha
const mensagemLambda = (f: string): string => f;

// Função sem retorno (void)
const exibirSoma = (a: number, b: number): void => console.log(a + b);

// Parâmetro com valor default
const saudar = (nome: string = "Visitante"): string => `Olá, ${nome}!`;

// Exemplo de operação matemática
const multiplicarLambda = (a: number, b: number): number => a * b;

// O parâmetro 'b' pode ser number ou undefined
const multiplicarOpcional = (a: number, b?: number): number => {
    if (b === undefined) {
        return a;
    }
    return a * b;
};

const multiplicadorTernario = (a:number, b?:number):number => (b === undefined) ? a : a * b;

const multOpCoalescencia = (a:number, b?:number):number => a * (b ?? 1);