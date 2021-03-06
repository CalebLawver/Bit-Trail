const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Trail, User, Review } = require('../../models');
const withAuth = require('../../utils/auth');
const joi = require('joi');
const trailSchema = require('../../joi-tests/trailSchema')

// get all trails
router.get('/', (req, res) => {
    console.log('-----------')
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
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Review,
                attributes: ['id', 'rev_text', 'rev_diff', 'user_id', 'trail_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbTrailData => {
        if (dbTrailData) {
            const trail = dbTrailData.get({ plain: true });
            res.render('single-trail', {trail, loggedIn: true});
            } else {
            res.status(404).json({ message: 'No trail found with that id' });
            return;
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    const {error, value } = trailSchema.validate(req.body);

    if(error) {
        console.log(error.details)
      return res.status(400).json(err);
    }

    Trail.create({
        tname: req.body.tname,
        address: req.body.address,
        miles: req.body.miles,
        kilometers: req.body.kilometers,
        lat: 0,
        lon: 0,
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
            tname: req.body.tname,
            address: req.body.address,
            miles: req.body.miles,
            kilometers: req.body.kilometers,
            lat: req.body.lat,
            lon: req.body.lon,
            difficulty: req.body.difficulty,
            blurb: req.body.blurb
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

router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Trail.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbTrailData => {
        if (!dbTrailData) {
          res.status(404).json({ message: 'No trail found with this id' });
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