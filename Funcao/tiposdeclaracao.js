//function declaration
//consigo chamar ela antes de deckarar
console.log(soma(3,4))
function soma(x,y)
{
    return x+y
}

//function expression
//so consigo chamar ela depois de declarar
const sub = function(x,y)
{
return x-y
}
console.log(soma(3,4))

//named function expression
//so consigo chamar ela depois de declarar
const mult=function mult(x,y)
{
    return x*y
}