const express = require("express");
const router = express.Router();

const mysql = require("../mysql/pool.js");

//전체조회
router.get("/", (req, res) => {
  mysql.query("BoardList").then((result) => res.send(result));
});

//단건조회
router.get("/:no", (req, res) => {
  let no = req.params.no;
  mysql.query("BoardGet", no).then((result) => res.send(result));
});

//등록
router.post("/", (req, res) => {
  mysql.query("BoardInsert", req.body).then((result) => res.send(result));
});

//수정
router.put("/:no", (req, res) => {
  const data = req.body;
  const no = req.params.no;
  mysql.query("BoardUpdate", [data, no]).then((result) => res.send(result));
});

module.exports = router;
