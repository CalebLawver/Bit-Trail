// import models
const User = require('./User');
const Trail = require('./Trail');
const Review = require('./Review');

// create connections between models
User.hasMany(Trail, {
    foreignKey: 'user_id'
});

Trail.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Trail.hasMany(Review, {
    foreignKey: ''
});

Review.belongsTo(Trail, {
    foreignKey: ''
});

// we can implement ratings, other reviews for posts

module.exports = { User, Trail, Review };