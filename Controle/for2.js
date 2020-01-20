const notas=[5,6,7,8,9,10]

for(let i in notas)
{
    console.log(i,notas[i])
}


const pessoa=
{
    nome:'joao',
    sobrenome:'perez',
    idade:25,
    peso:90
}

for(let atributo in pessoa)
{
    console.log(`${atributo} = ${pessoa[atributo]}`)
}