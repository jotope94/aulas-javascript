const pessoa=
{
    saudacao:'Bom dia!',
    falar()
    {
        console.log(this.saudacao)
    }

}

pessoa.falar()
const falar=pessoa.falar
falar()//conflido entre paradigmas:funcional e OO

//bind amarra o this aonde quer
const falardepessoa=pessoa.falar.bind(pessoa)
falardepessoa()