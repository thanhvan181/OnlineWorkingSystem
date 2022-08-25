const express = require('express');
const environment = require('../../../config/environment.config');

const router = express.Router();
const userRouter = require('./user.router');
const slotRouter = require('./slot.router');
const docsRouter = require('./docs.router');

router.use('/users', userRouter);
router.use('/slots', slotRouter);

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
