const nome = "Rebeca"
const concatenacao = 'Ola'+ nome +'!'
const template=`
olá
${nome}!`

console.log(concatenacao,template)

//espressoes...
console.log(`1+1=${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)