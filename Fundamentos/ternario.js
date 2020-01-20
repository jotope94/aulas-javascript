//Operador ternario compoe de 3 partes, primeira uma espressao, segunda o resultado se a 
// espressao é vdd e a terceira se ela é falsa

const resultado = nota => nota>= 7 ? 'Aprovado':'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))
