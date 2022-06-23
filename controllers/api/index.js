const router = require('express').Router();

// routes go here
const userRoutes = require('./user-routes');
const trailRoutes = require('./trail-routes');
const reviewRoutes = require('./review-routes');

// router.use('/route', ***routes)
router.use('/users', userRoutes);
router.use('/trails', trailRoutes);
router.use('/review', reviewRoutes);

module.exports = router;