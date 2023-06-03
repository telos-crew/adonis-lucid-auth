import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('account_name').notNullable()
      table.string('remember_me_token').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
