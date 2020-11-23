'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnualConsumoSchema extends Schema {
  up () {
    this.create('anual_consumos', (table) => {
      table.increments()
      table.float('consumo', 2)
      table.integer('ano')
      table.timestamp('data_criacao', { useTz: true });
      table.timestamps()
    })
  }

  down () {
    this.drop('anual_consumos')
  }
}

module.exports = AnualConsumoSchema
