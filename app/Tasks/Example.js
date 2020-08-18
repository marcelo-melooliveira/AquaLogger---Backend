'use strict'
const mqtt = require("mqtt");
const Task = use('Task')
const Consumo = use('App/Models/Consumo')

const client = mqtt.connect("mqtt://192.168.99.100:32769");
class Example extends Task {
   static get  schedule () {
     
    client.on('connect', function () {
      client.subscribe('tcc2', function (err) {
          if(!err){
            console.log("Conexão estabelecida!")
          }
      })
    })
     
    client.on('message', async function (topic, message) {
      // message is Buffer
      const aux = JSON.parse(message.toString());
      await Consumo.create({consumo: aux.consumo, data_criacao: new Date(aux.data_criacao - 10800000)})
    })
    
   // return '0 */1 * * * *'
   return '*/10 * * * * *'
  }

  async handle () {
    // this.info('Task Example handle')
    // console.log('teste')
    client.publish(`tcc`, `teste`);
  }
}

module.exports = Example
