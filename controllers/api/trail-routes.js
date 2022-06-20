const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Trail, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all trails
router.get('/', (req, res) => {
    Trail.findAll({
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbTrailData => res.json(dbTrailData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one trail
router.get('/:id', (req, res) => {
    Trail.findOne({
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
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    Trail.create({
        name: req.body.name,
        address: req.body.address,
        miles: req.body.miles,
        lat: req.body.lat,
        lon: req.body.lon,
        difficulty: req.body.difficulty,
        blurb: req.body.blurb,
        user_id: req.session.user_id
    })
    .then(dbTrailData => res.json(dbTrailData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// we can have a put('/rating?')

router.put('/:id', withAuth, (req, res) => {
    Trail.update(
        {
            name: req.body.name,
            address: req.body.address,
            miles: req.body.miles,
            lat: req.body.lat,
            lon: req.body.lon,
            difficulty: req.body.difficult
        },
        {
            where: {
                id: req.params.id
            } 
        }
    )
    .then(dbTrailData => {
        if (!dbTrailData) {
            res.status(404).json({ message: 'No trail found with that id' })
            return;
        }
        res.json(dbTrailData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    });
});

module.exports = router;