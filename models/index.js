// import models
const User = require('./User');
const Trail = require('./Trail');

// create connections between models
User.hasMany(Trail, {
    foreignKey: 'user_id'
});

Trail.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// we can implement ratings, other reviews for posts

module.exports = { User, Trail };