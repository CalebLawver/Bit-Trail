const router = require('express').Router();

// routes go here
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');


// router.use('/route', ***routes)
router.use('/api', apiRoutes);
router.use('/create-trails', dashboardRoutes);
router.use('/', homeRoutes);

module.exports = router;