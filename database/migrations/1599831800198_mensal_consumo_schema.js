'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MensalConsumoSchema extends Schema {
  up () {
    this.create('mensal_consumos', (table) => {
      table.increments()
      table.float('consumo', 2)
      table.integer('mes')
      table.timestamp('data_criacao', { useTz: false });
      table.timestamps()
    })
  }

  down () {
    this.drop('mensal_consumos')
  }
}

module.exports = MensalConsumoSchema
