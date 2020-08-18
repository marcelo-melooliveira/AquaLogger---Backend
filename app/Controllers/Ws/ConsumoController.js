'use strict'
// const mqtt = require("mqtt")
// const Consumo = use('App/Models/Consumo')
// const client = mqtt.connect("mqtt://192.168.99.100:32769");

class ConsumoController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request

    // client.on('connect', function () {
    //   client.subscribe('tcc2', function (err) {
    //       if(!err){
    //         console.log("Conexão estabelecida!")
    //       }
    //   })
    // })
  }
}

module.exports = ConsumoController
