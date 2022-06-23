const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    console.log('showing home page')
    return res.render('homepage', )
});

module.exports = router;