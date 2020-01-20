const notas=[7,6,5,8,3,7.1,9]

//sem callback

let notasbaixas1=[]
for(let i in notas)
{
notasbaixas1.push(notas[i])
}
console.log(notasbaixas1)
//com callback

notasbaixas2=notas.filter(function(nota){
    return nota < 7
})

console.log(notasbaixas2)

const notasmenorque7=nota=>nota<7
const notasbaixas3 = notas.filter(notasmenorque7)
console.log(notasbaixas3)