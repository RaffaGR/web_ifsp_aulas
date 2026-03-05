// 1
// let maiuscula: string = "TexT";

function imprimeMaiusculas(maiuscula: string = "Text") {
    return console.log(maiuscula.toUpperCase());
}

// imprimeMaiusculas();

const imprimeMaiusculasArrayFunction = (maiuscula: string = "Text"): void => console.log(maiuscula.toUpperCase());

// imprimeMaiusculasArrayFunction();

// 2
function elevar(n1: number, n2: number) {
    return n1 ** n2;
}

// 3
function dobrarNumeros(aN: number[]): number[] {
    return aN.map(numero => numero * 2);
}

/* function dobrarNumerosOPT2(aN: number[]): number[] {
    let nA: number[] = [];
    for (let i = 0; i < aN.length; i++) {
        nA.push(aN[i] * 2);
    }
    return nA;
} */

// const original = [1, 2, 3, 4, 5];
// const dobrados = dobrarNumeros(original);
// console.log(dobrados);

// 4
type Funcionario = {
    nome: string;
    cargo: string;
};

const funcionarios: Funcionario[] = [
    { nome: " Marcos ", cargo: " Desenvolvedor " },
    { nome: " Fernanda ", cargo: " Gerente " },
    { nome: " Carlos ", cargo: " Desenvolvedor " },
    { nome: " Joana ", cargo: " Analista " }
];
const cargoDesejado: string = " Desenvolvedor ";

function filtroCargo(funs: Funcionario[]): Funcionario[] {
    return funs.filter( fun => fun.cargo == " Desenvolvedor ");
}

const cargosFiltrados = filtroCargo(funcionarios);

// 5 
