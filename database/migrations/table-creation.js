exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.boolean('mailing_subscription');
    table.string('email').unique();
    table.string('password');
    table.string('first_name');
    table.string('last_name');
  }),
  knex.schema.createTable('checkout-page', (table) => {
    table.increments('id').primary();
    //foreign key for order services
  }),
  knex.schema.createTable('user-order-history', (table) => {
    table.increments('id').primary();
    //foreign key for user_id
    //foreign key for order_services
  }),
  knex.schema.createTable('order-services', (table) => {
    table.increments('id').primary();
    table.integer('quantity');
    table.string('address');
    table.string('city');
    table.string('state');
    table.string('zipcode');
    table.string('country');
    table.datetime('date_ordered');
    //foreign key for product_id
  }),
  knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.string('rating');
    table.datetime('date');
    table.string('first_name');
    table.string('last_name');
    //foreign key for product id
    //foreign key for user id
  }),
  knex.schema.createTable('mailing-list', (table) => {
    table.increments('id').primary();
    table.string('email');
    table.string('first_name');
    table.string('last_name');
  }),
  knex.schema.createTable('product', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('description');
      table.string('price');
      table.string('image');
      table.string('category');
      table.integer('quantity');
      //foreign key for category id
  }),
  knex.schema.createTable('category', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('description');
      table.string('image');
  })
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('users'),
  knex.schema.dropTable('checkout-page'),
  knex.schema.dropTable('user-order-history'),
  knex.schema.dropTable('order-services'),
  knex.schema.dropTable('reviews'),
  knex.schema.dropTable('mailing-list'),
  knex.schema.dropTable('product'),
  knex.schema.dropTable('category'),
]);