const router = require('express').Router();

// routes go here
const apiRoutes = require('./api/');


// router.use('/route', ***routes)
router.use('./api', apiRoutes);

module.exports = router;