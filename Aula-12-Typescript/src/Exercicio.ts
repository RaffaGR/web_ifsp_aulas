class Endereco {
    rua: string
    numero: number
    cidade: string

    constructor(rua: string, numero: number, cidade: string) {
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
    }
}

class Cliente {
    nome: string
    idade: number
    endereco: Endereco

    constructor(nome: string, idade: number, endereco: Endereco) {
        this.nome = nome
        this.idade = idade
        this.endereco = endereco
    }
}

class Pedido {
    id: number
    valor: number
    cliente: Cliente

    constructor(id: number, valor: number, cliente: Cliente) {
        this.id = id
        this.valor = valor
        this.cliente = cliente
    }
}

class Sistema {
    pedidos: Pedido[]

    constructor(pedidos: Pedido[]) {
        this.pedidos = pedidos
    }
}

const enderecoCliente = new Endereco("Rua das aguas Raraias Mythos", 200, "Boituva")
const cliente = new Cliente("Ana Pereira", 28, enderecoCliente)
const pedido = new Pedido(1, 159.90, cliente)
const sistema = new Sistema([pedido])

const primeiroPedido = sistema.pedidos[0]
if (primeiroPedido) {
    console.log("Nome do cliente:", primeiroPedido.cliente.nome)
    console.log("Cidade do cliente:", primeiroPedido.cliente.endereco.cidade)
    console.log("Valor do pedido:", primeiroPedido.valor)
} else {
    console.log("Nenhum pedido encontrado no sistema.")
}