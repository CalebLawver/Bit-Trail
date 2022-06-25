const router = require('express').Router();
const sequelize = require('../config/connection');
const { Trail, Review, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    Trail.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            }, 
            {
                model: Review,
                attributes: ['rev_text', 'rev_diff']
            }
        ]
    })
    .then(dbTrailData => {
        const trails = dbTrailData.map(trail => trail.get({ plain: true }));
        res.render('create-trails', { trails, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    this.post.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbTrailData => {
        if (dbTrailData) {
            const trail = dbTrailData.get({ plain: true });

            res.render('edit-trail', {
                trail,
                loggedIn: true
            });
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;