const express = require("express");
const router = express.Router();

const mysql = require("../mysql/pool.js");

//전체조회 /board?page=1  => (page-1)*10 -> 0, 2->10
router.get("/", async (req, res) => {
  let page = req.query.page;
  if (!page) {
    page = 1;
  }
  let offset = (page - 1) * 10;
  let list = await mysql.query("boardList", offset);
  let total = await mysql.query("boardCount");
  res.send({ list, total: total[0].cnt });
});

//단건조회    req.params.id
router.get("/:id", async function (req, res) {
  let id = req.params.id;
  let result = await mysql.query("boardInfo", id);
  res.send(result);
});

//등록   req.body
router.post("/", async function (req, res) {
  let result = await mysql.query("boardInsert", req.body);
  res.send(result);
});

//수정   req.body, req.params.id
router.put("/:id", async function (req, res) {
  const data = req.body;
  const id = req.params.id;
  let result = await mysql.query("boardUpdate", [data, id]);
  res.send(result);
});

//삭제  req.params.id
router.delete("/:id", async function (req, res) {
  const id = req.params.id;
  let result = await mysql.query("boardDelete", [id]);
  res.send(result);
});

module.exports = router;