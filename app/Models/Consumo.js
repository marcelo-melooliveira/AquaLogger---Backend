'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Consumo extends Model {
  static boot() {
    super.boot()
    this.addHook('afterCreate', 'NovoDadoConsumoHook.sendWs')
  }
}

module.exports = Consumo
