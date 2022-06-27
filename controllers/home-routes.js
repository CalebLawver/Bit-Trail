const router = require('express').Router();
const sequelize = require('../config/connection');
const { Trail, Review, User } = require('../models');

router.get('/', (req, res) => {
    Trail.findAll({
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ],
        order: [
            ['created_at', 'ASC']
        ]
    })
    .then(dbTrailData => {
        const trails = dbTrailData.map(trail => trail.get({ plain: true}));
        res.render('homepage', {
            trails,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }

    res.render('login');
});

module.exports = router;