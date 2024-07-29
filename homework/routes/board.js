const express = require("express");
const router = express.Router();

const mysql = require("../mysql/pool.js");

// 전체조회
router.get("/", async (req, res) => {
  mysql.query("List").then((result) => res.send(result));
});

// 단건조회
router.get("/:seq/", (req, res) => {
  let seq = req.params.seq;
  mysql.query("Get", seq).then((result) => res.send(result));
});

//등록
router.post("/", (req, res) => {
  const data = req.body;
  let result = mysql.query("Insert", data);
  res.send(result);
});

//수정
router.put("/:seq/", (req, res) => {
  const data = req.body;
  const seq = req.params.seq;
  mysql.query("Update", [data, seq]).then((result) => res.send(result));
});

//삭제
router.delete("/:seq/", (req, res) => {
  const seq = req.params.seq;
  mysql.query("Delete", seq).then((result) => res.send(result));
});

module.exports = router;
