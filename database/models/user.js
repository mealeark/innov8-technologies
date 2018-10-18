const bookshelf = require('../bookshelf');

const User = bookshelf.Model.extend({
  tableName: 'users',
})

const Users = bookshelf.Collection.extend({
  model: User,
})

const UsersCollection = {
  User, Users
}

export default {UsersCollection};