const express = require('express');
const userRouter  = require('./user');
const errorHandler = require('../middlewares/errorHandler');
const router = express.Router();
router.use('/user',userRouter);
router.use(errorHandler);
module.exports = router;

