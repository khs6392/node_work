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
const id = "8";
let sql = `delete from customer 
            where id = ? `;
// set = ? 에 이메일 어드레스 2개 하나로 쳐서 {}  set - 객체가 들어가야함
connection.query(sql, id, (err, results, fields) => {
  if (err) console.log(err);
  if (results.affectedRows == 1) {
    console.log("success update");
  } else {
    console.log("fail update");
  }
});
connection.end();
