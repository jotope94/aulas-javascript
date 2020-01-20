function teste1(num)
{
    if(num>7)
    console.log(num)
    console.log('final')
}

teste1(6)
teste1(8)


//no exemplo abaixo como tem um ponto e virgula depois
// if ele executa o if e não da erro, mas o bloco criado embaixo ele
//nao associa ao if criado
function teste2(num)
{
    if(num > 7);{
        console.log(num)
    }
}