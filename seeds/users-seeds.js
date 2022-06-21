const { User } = require('../models')

const userdata = [
    {
        username: 'Mike',
        email: 'mike@example.com',
        password: 'mikesverysecretpassword1',
    },
    {
        username: 'Emily',
        email: 'emily@example.com',
        password: 'notmydogsname2',
    },
    {
        username: 'Frank',
        email: 'frank@example.com',
        password: 'password123',
    },
  ]
  const seedTrails = () => User.bulkCreate(userdata, {individualHooks: true});

  module.exports = seedTrails;