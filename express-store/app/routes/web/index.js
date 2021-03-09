const express = require('express');
const router = express.Router();
const homeRouter = require('./home');
const contactRouter = require('./contact');
const aboutRouter = require('./about');
const carRouter = require('./car');

router.use('/', homeRouter);
router.use('/contact', contactRouter);
router.use('/about', aboutRouter);
router.use('/car', carRouter);

module.exports = router;
