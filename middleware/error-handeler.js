const { CustomError } = require("../errors/custome-error");

const errorHandelingMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "something went wrong, please try again later!" });
};

module.exports = errorHandelingMiddleware;
