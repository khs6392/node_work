const express = require("express");
const router = express.Router();

// mysql 모듈 로드
const mysql = require("../mysql/pool.js");

// 전체조회 /product?category=t1&price=20000
router.get("/", (req, res) => {
  mysql.query("List").then((result) => res.send(result));
});

// 단건조회  /product/1
router.get("/:prodnum/", (req, res) => {
  let prodnum = req.params.prodnum;
  mysql.query("Get", prodnum).then((result) => res.send(result));
});

// 등록(json string) /product
router.post("/", (req, res) => {
  const data = req.body;
  mysql.query("Insert", data).then((result) => res.send(result));
});

//put    /product/1        json 형식으로 파라미터 전송 : prodname, price
router.put("/:prodnum/", (req, res) => {
  const data = req.body;
  const prodnum = req.params.prodnum;
  mysql.query("Update", [data, prodnum]).then((result) => res.send(result));
});

router.delete("/:prodnum/", (req, res) => {
  const prodnum = req.params.prodnum;
  mysql.query("Delete", [prodnum]).then((result) => res.send(result));
});

module.exports = router;
