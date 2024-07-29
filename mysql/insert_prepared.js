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

// DB 커넥션 생성
let connection = mysql.createConnection(conn);
console.log(connection);

// 쿼리실행
const name = "싸우자";
const email = "f@f.c";
const phone = "010-444-4444";
let sql = `insert into customer set ? `; //name = ?, email = ?, phone = ?

connection.query(sql, { name, email, phone }, (err, results, fields) => {
  if (err) console.log(err);
  console.log(results.affectedRows, results.insertId);
});
connection.end();
