const express = require('express');
const environment = require('../../../config/environment.config');

const router = express.Router();
const userRouter = require('./user.router');
const docsRouter = require('./docs.router');
const salemansRouter = require('./salemans.router');


router.use('/users', userRouter);
router.use('/salemans', salemansRouter);

if (environment.env === 'development') {
    router.use('/docs', docsRouter);
}

router.get('/checkstatus', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
    });
});

module.exports = router;