'use strict'
// const Ws = use('Ws')
const Consumo = use('App/Models/Consumo')
class RecebeConsumoController {
 async update({ request }){

    const { data } = request.all()
    const aux_data = data.map((value)=>{
                        return ({consumo: value.y, data_criacao: new Date(value.x * 1000)})
                      })
    // console.log(data)
    const consumo = await Consumo.createMany(aux_data)

  //  const topic = Ws.getChannel('consumo').topic('consumo')

  //  if(topic){
  //   console.log('entrou no topic')
  //   // topic.broadcastToAll('message', 'teste vindo do adonis');
  //  }else{
  //   console.log('erro ao entrar no topic')
  //  }
  

   return {consumo: consumo};
  }
}

module.exports = RecebeConsumoController
