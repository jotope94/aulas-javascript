function getintervalodEntre(min,max)
{
    const valor=Math.random()*(max-min) +min
    return Math.floor(valor)
}


let opcao=0

do
{
    opcao=getintervalodEntre(-1,18)
    console.log(`opção escolhida foi ${opcao}`)


}while(opcao!=-1)