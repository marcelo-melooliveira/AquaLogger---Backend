'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SemanalConsumoSchema extends Schema {
  up () {
    this.create('semanal_consumos', (table) => {
      table.increments()
      table.float('consumo', 2)
      table.integer('dia_semana')
      table.timestamp('data_criacao', { useTz: true });
      table.timestamps()
    })
  }

  down () {
    this.drop('semanal_consumos')
  }
}

module.exports = SemanalConsumoSchema
