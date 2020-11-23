'use strict'
const Consumo = use('App/Models/Consumo')
// const Consumo_Semanal = use('App/Models/SemanalConsumo')
const Consumo_Mensal = use('App/Models/MensalConsumo')
const Consumo_Anual = use('App/Models/AnualConsumo')
const DateFNS = require('date-fns');
// const { parseFromTimeZone, formatToTimeZone } = require('date-fns-timezone')

class DownloadDiarioController {
  async diario({request}){
    const {data_ref_inicial, data_ref_final} = request.all()
    const busca_inicial = DateFNS.parseISO(data_ref_inicial)
    const busca_final = DateFNS.parseISO(data_ref_final)

    // const busca_inicial = parseFromTimeZone(DateFNS.parseISO(data_ref_inicial), { timeZone: 'America/Fortaleza' })
    // const busca_final = DateFNS.endOfDay(DateFNS.parseISO(data_ref_final))

    const consumo = await Consumo.query()
                                  .whereBetween('data_criacao', [DateFNS.startOfDay(busca_inicial), DateFNS.endOfDay(busca_final)])
                                  .select('id', 'consumo', 'data_criacao')
                                  .orderBy('data_criacao', 'asc')                        
                                  .fetch()
    return consumo

   // return ({data_ref_inicial, data_ref_final,busca_inicial, busca_final})


  }

  async mensal({request}){
    const {data_ref_inicial, data_ref_final} = request.all()
    const busca_inicial = DateFNS.parseISO(data_ref_inicial)
    const busca_final = DateFNS.parseISO(data_ref_final)

    // const busca_inicial = parseFromTimeZone(DateFNS.parseISO(data_ref_inicial), { timeZone: 'America/Fortaleza' })
    // const busca_final = DateFNS.endOfDay(DateFNS.parseISO(data_ref_final))

    const consumo = await Consumo_Mensal.query()
                                  .whereBetween('data_criacao', [DateFNS.startOfMonth(busca_inicial), DateFNS.endOfMonth(busca_final)])
                                  .select('id','consumo', 'mes', 'data_criacao')
                                  .orderBy('data_criacao', 'asc')                        
                                  .fetch()
    return consumo

   // return ({data_ref_inicial, data_ref_final,busca_inicial, busca_final})


  }

  async anual({request}){
    const {data_ref_inicial, data_ref_final} = request.all()
    const busca_inicial = DateFNS.parseISO(data_ref_inicial)
    const busca_final = DateFNS.parseISO(data_ref_final)

    // const busca_inicial = parseFromTimeZone(DateFNS.parseISO(data_ref_inicial), { timeZone: 'America/Fortaleza' })
    // const busca_final = DateFNS.endOfDay(DateFNS.parseISO(data_ref_final))

    const consumo = await Consumo_Anual.query()
                                  .whereBetween('data_criacao', [DateFNS.startOfYear(busca_inicial), DateFNS.endOfYear(busca_final)])
                                  .select('id', 'consumo', 'ano', 'data_criacao')
                                  .orderBy('data_criacao', 'asc')                        
                                  .fetch()
    return consumo

   // return ({data_ref_inicial, data_ref_final,busca_inicial, busca_final})


  }
}

module.exports = DownloadDiarioController
