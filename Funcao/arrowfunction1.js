let dobro= function(a){
    return 2*a
}

dobro=(a)=>{
    return 2*a
}

//isso é função tambem
dobro= a => 2*a //retorno esta implicito
console.log(dobro(Math.PI))

let ola= function()
{
    return 'olá'
}

ola=()=>'Olá'
ola=_=>'olá'//possui um parametro
console.log(ola())