// exercicio 1 - no postman

// exercicio 2
/* ex 1 */
class ProdutoEx1 {
    constructor(
        public id: number,
        public nome: string,
        public preco: number
    ) { }
}

/* ex 2 */
class Categoria {
    constructor(
        public id: number,
        public nome: string
    ) { }
}

class ProdutoEx2 {
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public categoria: Categoria
    ) { }
}

/* ex 3 */
class Endereco {
    constructor(
        public cidade: string,
        public pais: string
    ) { }
}

class Fabricante {
    constructor(
        public nome: string,
        public endereco: Endereco
    ) { }
}

class ProdutoEx3 {
    constructor(
        public id: number,
        public nome: string,
        public preco: number,
        public fabricante: Fabricante
    ) { }
}

/* ex 4 */
class Item {
    constructor(
        public nome: string,
        public quantidade: number
    ) { }
}

class ProdutoEx4 {
    constructor(
        public id: number,
        public nome: string,
        public itens: Item[]
    ) { }
}