function TransformStreamErroLancar(erro)
{
    //throw new Error('...')
   //throw 10
   //throw true
   //throw 'mensagem'

   throw{
       nome:erro.name,
       msg:erro.message,
       date:new Date
   }
}

function imprimirNomeGritando(obj)
{
    try
    {
        console.log(obj.name.toupperCase()+'!!!')
    }
    catch(e)
    {
        TransformStreamErroLancar(e)
    }
    finally
    {
      console.log('final')
    }
}

const obj={nome:'joao'}
imprimirNomeGritando(obj)