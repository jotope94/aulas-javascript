//função em js é first-class object |citizens
//higher-order function

//criar de forma literal

function fun1()
{

}

//armazenar em uma variavel
const fun2= function()
    {

    }

//armazenar em um array
const array=[function(a,b){return a+b},fun1,fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj={}
obj.falar=function(){return'opa'}
console.log(obj.falar())

//passar funcao como parametro
function run(fun)
{
    fun()
}
//como chamar a função a cima
run(function(){console.log('executando')})

//uma função pode retornar/conter uma função
function soma(a,b)
{
    return function(c)
    {
        console.log(a+b+c)
    }
}
//como chamar o exemplo acima
soma(2,3)(4)
//ou
const valor=soma(2,3)
valor(4)