const express = require('express');
const passport = require('passport');
const environment = require('../../../config/environment.config');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.get('/google/login/success', authController.googleLoginSuccess);
router.get('/google/login/failed', authController.googleLoginFailed);
router.get('/google/logout', authController.googleLogout);
router.get('/google', passport.authenticate('google', {scope: ['profile']}), (req) => {
  req.role = req.query.role;
});
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: environment.google.clientUrl,
    failureRedirect: '/v1/google/login/failed',
  })
);

module.exports = router;
