const express = require("express");
const router = express.Router();

// mysql 모듈 로드
const mysql = require("mysql2");

// mysql 접속 정보
const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
};

//전체조회 http://localhost/customer/ ?
router.get("/", (req, res) => {
  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);

  //쿼리 실행
  connection.query("select * from customer", (err, result, fields) => {
    if (err) console.log(err);
    res.send(result);
  });
  connection.end();
});

//단건조회 http://localhost/customer/2
router.get("/:id", (req, res) => {
  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);
  let sql = "select * from customer where id =?";
  let id = req.params.id;
  //쿼리 실행
  connection.query(sql, id, (err, result, fields) => {
    if (err) console.log(err);
    res.send(result);
  });
  connection.end();
});

//등록
router.post("/", (req, res) => {
  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);
  console.log(connection);

  // 쿼리실행
  const data = req.body;
  let sql = `insert into customer set ? `; //name = ?, email = ?, phone = ?

  connection.query(sql, [data], (err, results, fields) => {
    if (err) console.log(err);
    res.send(results);
  });
  connection.end();
});

//수정
router.put("/:id", (req, res) => {
  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);
  const date = req.body;
  const id = req.params.id;
  console.log(connection);

  // 쿼리실행
  let sql = `update customer set ?
           where id = ? `;

  connection.query(sql, [date, id], (err, results, fields) => {
    if (err) console.log(err);
    res.send(results);
  });
  connection.end();
});

//삭제
router.delete("/:id", (req, res) => {
  // DB 커넥션 생성
  let connection = mysql.createConnection(conn);
  let sql = "delete from customer where id =?";
  let id = req.params.id;
  //쿼리 실행
  connection.query(sql, id, (err, result, fields) => {
    if (err) console.log(err);
    if (result.affectedRows == 1) {
      console.log("success update");
    } else {
      console.log("fail update");
    }
    res.send(result);
  });
  connection.end();
});

module.exports = router;
