const router = require('express').Router();
const apiRoute = require('./api/');
const homeRoutes = require('./homes.routes');
const dashBoardRoutes = require('./dashboard.routes');

router.use('/', homeRoutes);
router.use('/api', apiRoute);
router.use('/dashboard', dashBoardRoutes);



module.exports = router;