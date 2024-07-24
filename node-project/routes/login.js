const express = require("express");
const router = express.Router();

//  get  /login

router.get("/login", (req, res) => {
  const { email, pw } = req.query;
  console.log(email);
  req.session.email = email;
  req.session.save((err) => {
    if (err) throw err;
    else res.redirect("/member");
  });
});
//  get /logout
router.get("/logout", (req, res) => {
  res.send("logout");
});

module.exports = router;
