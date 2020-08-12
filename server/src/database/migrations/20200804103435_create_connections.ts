import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table
            .timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();

        table
            .integer('user_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('connections');
}
