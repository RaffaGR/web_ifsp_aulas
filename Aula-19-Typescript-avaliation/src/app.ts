import express, { Request, Response } from "express"
import { Produto } from "./Produto"

const app = express()
const PORT = process.env.PORT ?? 3000
app.use(express.json())

const produtos: Produto[] = []

/* ex 1 */
function novoProduto(req: Request, res: Response): void {
    try {
        let data: any = req.body

        if (!data.id || !data.nome || !data.preco || !data.fabricante) {
            throw new Error("Produto requer id, nome, preco e fabricante")
        }
        
        if (data.preco <= 0) {
            throw new Error("O preco deve ser maior que zero")
        }
        
        if (!data.fabricante.nome || !data.fabricante.endereco || !data.fabricante.endereco.cidade || !data.fabricante.endereco.pais) {
            throw new Error("Fabricante deve conter nome, cidade e pais preenchidos")
        }

        let idNum = Number(data.id)
        
        let existe = produtos.find(p => p.id === idNum)
        if (existe) {
            throw new Error("Ja existe um produto com este ID")
        }

        const produto = new Produto(
            idNum,
            data.nome,
            data.preco,
            data.fabricante
        )
        
        produtos.push(produto)

        res.status(200).json(produto)
    } catch (e: unknown) {
        res.status(400).json({
            Message: (e as Error).message
        })
    }
}

/* ex 2 */
function listarProdutos(req: Request, res: Response): void {
    res.status(200).json(produtos)
}

/* ex 3 */
function buscarPorID(req: Request, res: Response): void {
    try {
        let idBusca = Number(req.params.id)
        
        let produto = produtos.find(p => p.id === idBusca)
        
        if (!produto) {
            res.status(404).json({ Message: "Produto nao encontrado" })
            return
        }
        
        res.status(200).json(produto)
    } catch (e: unknown) {
        res.status(500).json({ Message: "Erro interno da aplicacao" })
    }
}

/* ex 4 */
function atualizarProduto(req: Request, res: Response): void {
    try {
        let idAlt = Number(req.params.id)
        let data: any = req.body
        
        let produto = produtos.find(p => p.id === idAlt)
        if (!produto) {
            res.status(404).json({ Message: "Produto nao encontrado" })
            return
        }
        
        if (!data.nome || !data.preco || !data.fabricante) {
            throw new Error("Novos dados devem conter nome, preco e fabricante")
        }
        if (data.preco <= 0) {
            throw new Error("O preco deve ser maior que zero")
        }
        if (!data.fabricante.nome || !data.fabricante.endereco || !data.fabricante.endereco.cidade || !data.fabricante.endereco.pais) {
            throw new Error("Fabricante deve conter nome, cidade e pais")
        }
        
        produto.nome = data.nome
        produto.preco = data.preco
        produto.fabricante = data.fabricante
        
        res.status(200).json(produto)
    } catch (e: unknown) {
        res.status(400).json({ Message: (e as Error).message })
    }
}

/* ex 5 */
function removerProduto(req: Request, res: Response): void {
    try {
        let idRem = Number(req.params.id)
        let produto = produtos.find(p => p.id === idRem)
        
        if (!produto) {
            res.status(404).json({ Message: "Produto nao encontrado" })
            return
        }
        
        let index = produtos.indexOf(produto)
        produtos.splice(index, 1)
        
        res.status(200).json({ Message: "Produto removido com sucesso" })
    } catch (e: unknown) {
        res.status(500).json({ Message: "Erro interno ao remover" })
    }
}

app.post('/api/produtos', novoProduto)
app.get('/api/produtos', listarProdutos)
app.get('/api/produtos/:id', buscarPorID)
app.put('/api/produtos/:id', atualizarProduto)
app.delete('/api/produtos/:id', removerProduto)

app.listen(PORT, () => console.log(`API Avaliativa no ar em: http://localhost:${PORT}`))
