const environment = require('../../../config/environment.config');
const catchAsync = require('../utils/catchAsync');

module.exports = {
  googleLoginSuccess: catchAsync(async (req, res) => {
    console.log(req.role);
    if (req.user) {
      res.status(200).json({
        susscess: true,
        profile: {
          name: req.user.displayName,
          photo: req.user.photos[0].value,
          googleId: req.user.id,
        },
        message: 'Login success',
      });
    }
  }),
  googleLoginFailed: catchAsync(async (req, res) => {
    res.status(401).json({
      susscess: false,
      message: 'Login failed',
    });
  }),
  googleLogout: catchAsync(async (req, res) => {
    req.logout();
    res.redirect(environment.google.clientUrl);
  }),
};
