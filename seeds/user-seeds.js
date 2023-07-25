const { User } = require('../models')

const userData = [
  {
    full_name: 'Jeff Smith',
    email: 'jeff@live.com',
    password: 'abc123',
  },
  {
    full_name: 'Christian Martinez',
    email: 'christian@live.com',
    password: 'abc123',
  },
  {
    full_name: 'Travis Barker',
    email: 'travis@live.com',
    password: 'abc123',
  },
  {
    full_name: 'Jenna Adams',
    email: 'jenna@live.com',
    password: 'abc123',
  },
  {
    full_name: 'John Hancock',
    email: 'john@live.com',
    password: 'abc123',
  },
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers
