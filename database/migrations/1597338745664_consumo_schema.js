'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConsumoSchema extends Schema {
  up () {
    this.create('consumos', (table) => {
      table.increments()
      table.float('consumo', 2)
      table.timestamp('data_criacao', { useTz: true });
      table.timestamps()
    })
  }

  down () {
    this.drop('consumos')
  }
}

module.exports = ConsumoSchema
