exports.up = (knex) => {
  return knex.schema
    .createTable('users', (table) =>{
      table.increments('id').primary();
      table.boolean('mailing_subscription');
      table.string('email').unique();
      table.string('password');
      table.string('first_name');
      table.string('last_name');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users');
}