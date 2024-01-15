const jwt = require("jsonwebtoken")
require("dotenv").config()

const authenticateToken = (req, res, next) => {
  const token = req.session.token;
  if (!token) return res.render("admin/login");
  jwt.verify(token, process.env.JWT_SIGN, (err, user) => {
    if (err) return res.render("admin/login");
    if(!user) return res.render("admin/login")
    req.user = user;
    next();
  });
};

module.exports = authenticateToken
