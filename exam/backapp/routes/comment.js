const express = require("express");
const router = express.Router();

const mysql = require("../mysql/pool.js");

//전체조회
router.get("/", (req, res) => {
  mysql.query("CommentList").then((result) => res.send(result));
});

//단건조회
router.get("/:no", (req, res) => {
  let no = req.params.no;
  mysql.query("CommentGet", no).then((result) => res.send(result));
});

module.exports = router;
