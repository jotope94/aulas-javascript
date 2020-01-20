function Pessoa()
{
 this.idade=0

 const self=this
 setInterval(function()
 {
     self.idade++
     console.log(self.idade)
 }, 1000)

 /* caso voce não queira utilizar o self para 
 //amarrar o this vc pode usar o bind no final da funcao
 setInterval(function()
 {
     thid.idade++
     console.log(this.idade)
 }.bind(this), 1000)
 */
}

new Pessoa