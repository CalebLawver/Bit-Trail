const router = require('express').Router();
const sequelize = require('../config/connection');
const  { Review, Trail, User } = require('../models');

router.get('/', (req, res) => {
    console.log('showing home page')
    return res.render('homepage', )
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }

    res.render('login');
});

router.get('/create-trail', (req, res) => {
    Trail.findOne({
        where: {
            id: req.params.id
        },
        // attributes: [
        //     'id',
        //     'name',
        //     'address',
        //     'miles',
        //     'kilometers',
        //     'lat',
        //     'lon',
        //     'difficulty',
        //     'blurb',
        //     'user_id'
        // ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbTrailData => {
        if (!dbTrailData) {
            res.status(404).json({ message: 'No trail found with that id' });
            return;
        }
        res.json(dbTrailData);
        res.render('create-trail');
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// router.post('/', withAuth, (req, res) => {
//     Trail.create({
//         name: req.body.name,
//         address: req.body.address,
//         miles: req.body.miles,
//         lat: req.body.lat,
//         lon: req.body.lon,
//         difficulty: req.body.difficulty,
//         blurb: req.body.blurb,
//         user_id: req.session.user_id
//     })
//     .then(dbTrailData => res.json(dbTrailData))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

module.exports = router;