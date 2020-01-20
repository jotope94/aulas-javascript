let valor // nao esta inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valores)
//console.log(valor.toString()) //erro

const produto={}
console.log(produto.preco)
console.log(produto)

produto.preco=3.50
console.log(produto)

produto.preco=undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco=null //sem preço
console.log(!!produto.preco)
console.log(produto)