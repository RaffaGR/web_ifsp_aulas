// Array.map<U>(callback: (value: T, index: number) => U):U[]
const numeros: number[] = [1,2,3,4,5];
const dobro: number[] = numeros.map(n => n*2);
const string: string[] = numeros.map(n => `Numero: ${n}`)
console.log(string)

type Produto = {id: number, nome: string, preco: number};
const produtos = [
    {id:1, nome: 'Mouse', preco: 50},
    {id:2, nome: 'MousePad', preco: 500},
]

// produtos.forEach(p => p.nome = 'Qual quer coisa'); (oq n se pode fazer msm funcionando vai contra as regras)

const nomes: string[] = produtos.map(p => p.nome);

const listaFormatada = produtos.map( p => ({
    id: p.id,
    label: `${p.nome} - R$ ${p.preco.toFixed(2)}`,
    disponivel: true
}))

console.log(listaFormatada);