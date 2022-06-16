const router = require('express').Router();

// routes go here
const userRoutes = require('./user-routes');
const trailRoutes = require('./trail-routes');

// router.use('/route', ***routes)
router.use('/users', userRoutes);
router.use('trails', trailRoutes);

module.exports = router;