'use strict'
const Consumo = use('App/Models/Consumo')
const DateFNS = require('date-fns');

class EnviaConsumoController {
  async diario({request}){
    const { date } = request.all();
    const parsedDate = DateFNS.parseISO(date)
    const consumo = await Consumo.query()
    .whereBetween('data_criacao', [DateFNS.startOfDay(parsedDate), DateFNS.endOfDay(parsedDate)])
                            .fetch()

    return consumo
  }
}

module.exports = EnviaConsumoController
