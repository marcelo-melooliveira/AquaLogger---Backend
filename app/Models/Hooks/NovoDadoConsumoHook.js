'use strict'
const Ws = use('Ws')
const Consumo = use('App/Models/Consumo')
const DateFNS = require('date-fns');
const NovoDadoConsumoHook = exports = module.exports = {}

NovoDadoConsumoHook.method = async (modelInstance) => {
}

NovoDadoConsumoHook.sendWs = async (dado) =>{
const topic = Ws.getChannel('consumo').topic('consumo')
  if(topic){
    const parsedDate = DateFNS.parseISO('2020-08-25')
    const consumo = await Consumo.query()
                                 .whereBetween('data_criacao', [DateFNS.startOfDay(parsedDate), DateFNS.endOfDay(parsedDate)])
                                 .orderBy('data_criacao', 'asc')
                                 .fetch()
    topic.broadcast('new', consumo);
  }
}
