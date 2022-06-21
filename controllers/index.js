const router = require('express').Router();

// routes go here
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');


// router.use('/route', ***routes)
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;