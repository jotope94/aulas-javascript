//estrategia 1 para gerar valor padrão
function soma1(a,b,c)
{  // informação passada OUno numero 1
    a=a||1
    b=b||1
    c=c||1
return a+b+c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0))//entende que o valor é falso e coloca o valor padrão

console.log("/////////////////")
//estrategia 2,3,e 4 para gerar valor padrão
function soma2(a,b,c)
{
    a=a!==undefined ? a:1
    b= 1 in arguments ? b:1
    c= isNaN(c) ? 1:c

    return a+b+c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))
console.log("///////////////////////")
//valor padrap de cs2015
function soma3(a=1,b=1,c=1)
{
    return a+b+c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(1,2,3))
console.log(soma3(0,0,0))