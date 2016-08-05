module.exports = {
  errorHandler: (err, req, res, next) => {
    res.status(500).send({
      error: err.message
    });
  },
  logError: (err, req, res, next) => {
    console.log(err.stack);
    next(err);
  }
};
