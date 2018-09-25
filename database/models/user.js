const bookshelf = require('../bookshelf');

const User = bookshelf.model.extend({
  tableName: 'users',
})

module.exports = User;