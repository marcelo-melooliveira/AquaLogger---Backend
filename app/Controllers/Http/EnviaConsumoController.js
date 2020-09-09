'use strict'
const Consumo = use('App/Models/Consumo')
const DateFNS = require('date-fns');

class EnviaConsumoController {
  async diario({request}){
    const { date } = request.all();
    const parsedDate = DateFNS.parseISO(date)
    const consumo = await Consumo.query()
                                  .whereBetween('data_criacao', [DateFNS.startOfDay(parsedDate), DateFNS.endOfDay(parsedDate)])
                                  .orderBy('data_criacao', 'asc')                        
                                  .fetch()
    return consumo
  }

  async semanal({request}){
    const { date } = request.all();
    const parsedDate = DateFNS.parseISO(date)
    // const consumo = DateFNS.getDay(parsedDate);
      
    const consumo = await Consumo.query()
                                  .whereBetween('data_criacao', [DateFNS.startOfWeek(parsedDate), DateFNS.endOfWeek(parsedDate)])
                                  .orderBy('data_criacao', 'asc')                      
                                  .fetch()

    return consumo
  }

  async mensal({request}){
    const { date } = request.all();
    const parsedDate = DateFNS.parseISO(date)
    // const consumo = DateFNS.getDay(parsedDate);
      
    const consumo = await Consumo.query()
                                  .whereBetween('data_criacao', [DateFNS.startOfMonth(parsedDate), DateFNS.endOfMonth(parsedDate)])
                                  .orderBy('data_criacao', 'asc')                      
                                  .fetch()

    return consumo
  }

  async destroy({request}){
    const { date } = request.all();
    const parsedDate = DateFNS.parseISO(date)
    const consumo = await Consumo.query()
    .whereBetween('data_criacao', [DateFNS.startOfDay(parsedDate), DateFNS.endOfDay(parsedDate)])
                            .delete()
    return consumo
  }
}

module.exports = EnviaConsumoController
