const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Trail, User } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        include: [{ model: Trail }],
    })
    .then((users) => res.json(tags))
    .catch((err) => res.status(400).json(err))
});

module.exports = router;