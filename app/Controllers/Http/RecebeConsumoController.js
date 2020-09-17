'use strict'
// const Ws = use('Ws')
const DateFNS = require('date-fns');
const Consumo = use('App/Models/Consumo')
const Consumo_Semanal = use('App/Models/SemanalConsumo')
const Consumo_Mensal = use('App/Models/MensalConsumo')
const Consumo_Anual = use('App/Models/AnualConsumo')

class RecebeConsumoController {
 async update({ request }){

    const { data } = request.all()
// ***** Parte de código de consumo diário
    const aux_diario = data.map((value)=>{
                        return ({consumo: value.y, data_criacao: new Date(value.x * 1000)})
                      })
     const consumo = await Consumo.createMany(aux_diario)      
   // return {consumo: consumo};


// ***** Parte de código de consumo semanal
   const aux_semanal = data.map((value)=>{
     const dia_da_semana = DateFNS.getDay(new Date(value.x * 1000))
    return ({consumo: 0, dia_semana: dia_da_semana, data_criacao: DateFNS.startOfDay(new Date(value.x * 1000))})
  })
    for(let i=0; i<aux_semanal.length; i+=1){
      const semanal = await Consumo_Semanal.findOrCreate(
        { data_criacao: aux_semanal[i].data_criacao },
        aux_semanal[i]
      )
      // semanal.consumo += aux_semanal[i].consumo
      semanal.consumo += data[i].y
      await semanal.save()
    }


// ***** Parte de código de consumo mensal
    const aux_mensal =  data.map((value)=>{
      const num_mes = DateFNS.getMonth(new Date(value.x * 1000))
     return ({consumo: 0, mes: num_mes, data_criacao: DateFNS.startOfMonth(new Date(value.x * 1000))})
   })
   for(let i=0; i<aux_mensal.length; i+=1){
    const mensal = await Consumo_Mensal.findOrCreate(
      { data_criacao: aux_mensal[i].data_criacao },
      aux_mensal[i]
    )
    
    // mensal.consumo += aux_mensal[i].consumo
    mensal.consumo += data[i].y
    await mensal.save()
  }

// ***** Parte de código de consumo anual
  const aux_anual =  data.map((value)=>{
    const num_ano = DateFNS.getYear(new Date(value.x * 1000))
  return ({consumo: 0, ano: num_ano, data_criacao: DateFNS.startOfYear(new Date(value.x * 1000))})
  })
  for(let i=0; i<aux_anual.length; i+=1){
  const anual = await Consumo_Anual.findOrCreate(
    { data_criacao: aux_anual[i].data_criacao },
    aux_anual[i]
  )
  // anual.consumo += aux_anual[i].consumo
  anual.consumo += data[i].y
  await anual.save()
}
  

   return {consumo: consumo};
  }
}

module.exports = RecebeConsumoController
