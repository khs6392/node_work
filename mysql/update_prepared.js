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
const id = "2";
const email = "x@x.x";
const address = "문경";
let sql = `update customer set
            email = ?,
            address = ? 
        where id = ? `;
// ?,?,? 물음표가 3개라서 밑에 배열로 들어감 []
// ?가 하나일시 중괄호 {}
connection.query(sql, [email, address, id], (err, results, fields) => {
  if (err) console.log(err);
  if (results.affectedRows == 1) {
    console.log("success update");
  } else {
    console.log("fail update");
  }
});
connection.end();
