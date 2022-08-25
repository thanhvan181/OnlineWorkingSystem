module.exports = {
  slot: async (req, res, next) => {
    try {
      res.status(200).send('slot');
    } catch (err) {
      next(err)
    }
  },
};
