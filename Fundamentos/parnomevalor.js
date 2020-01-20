//par nome/valor

const saudacao='Opa'//contexto lexico1


function exec()
{
    const saudacao='falaaa' //contexto lexico 2
    return saudacao
}

//objetos são agrupados aninhados de pares nome/valor
const cliente={
    nome:'Pedro',
    Idade:32,
    peso:90,
    endereco:{
        logradouro:'rua muito legal',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)