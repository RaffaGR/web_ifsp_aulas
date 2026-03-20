// 1:
const produtosUSD = [
    { nome: "Teclado", precoUSD: 40 },
    { nome: "Mouse", precoUSD: 15 },
    { nome: "Monitor", precoUSD: 200 }
];

const TAXA_CAMBIO = 5.00;

const produtosReal = produtosUSD.map(produto => ({
    nome: produto.nome,
    precoBRL: produto.precoUSD * TAXA_CAMBIO
}));

console.log(produtosReal);


// 2
const usuarios = ['ana', 'marcos', 'julia'];

usuarios.forEach(usuario => {
    const nomeFormatado = usuario.charAt(0).toUpperCase() + usuario.slice(1);
    
    console.log(`Usuário ${nomeFormatado} conectado com sucesso!`);
});


// 3
const versoes = ['1.10.0', '1.2.1', '1.0.5', '1.20.0'];

const copiaVersionOrdenadas = [...versoes].sort((a, b) => {
    return a.localeCompare(b, undefined, { numeric: true });
});

console.log("Original:", versoes); 
console.log("Ordenado:", copiaVersionOrdenadas); 


// 4
const estudantes = [
    { nome: 'Ricardo', nota: 8.5, bolsista: false },
    { nome: 'Beatriz', nota: 9.2, bolsista: true },
    { nome: 'Tiago', nota: 7.0, bolsista: false },
    { nome: 'Maria', nota: 9.8, bolsista: true }
];
