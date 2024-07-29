var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("main", { title: "ejs 테스트입니다." });
});

module.exports = router;
