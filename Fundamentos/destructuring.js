// novo recirso do es2015


const pessoa = {
    nome:'Ana',
    idade:5,
    endereco:{
        logradouro:'Rua abc',
        numero:1000
    }
}

const {nome,idade}= pessoa
console.log(nome,idade)

const{nome:n, idade:i}=pessoa
console.log(n,i)

const {sobrenome,bemhumorada=true}=pessoa
console.log(sobrenome,humorada)

const{endereco:{logradouro,numero,cep}}=pessoa
console.log(logradouro,numero,cep)

/* vai dar erro pois não existe essas informações(nuenhuma delas)
const {conta:{ag,num}}= pessoa
console.log(ag,num)
*/