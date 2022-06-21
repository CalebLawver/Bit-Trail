const seedUsers = require('./users-seeds');
const seedTrails = require('./trail-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('----------');
  await seedUsers();
  console.log('----------');
  await seedTrails();;
  console.log('----------');

  process.exit(0);
};

seedAll();