const express = require('express');
const environment = require('../../../config/environment.config');

const router = express.Router();
const userRouter = require('./user.router');
const slotRouter = require('./slot.router');
const docsRouter = require('./docs.router');
const teacherRouter = require('./teacher.router');
const salemanRouter = require('./saleman.router');
const orderRouter = require('./order.router');
const studentRouter = require('./student.router');
const paidmanagerRouter = require('./paidmanager.router');

router.use('/users', userRouter);
router.use('/teachers', teacherRouter);
router.use('/slots', slotRouter);
router.use('/salemans', salemanRouter);
router.use('/orders', orderRouter);
router.use('/students', studentRouter);
router.use('/paidmanager', paidmanagerRouter);

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
