const router = require('express').Router();
const commentRoute = require('./comment-routes/');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/user', userRoutes);
router.use('/comment', commentRoute);
router.use('/post', postRoutes);



module.exports = router;