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
const id = "1";
const email = "z@z.z";
const address = "대구";
let sql = `update customer set
            email = '${email}',
            address = '${address}' 
        where id = '${id}' `;

connection.query(sql, (err, results, fields) => {
  if (err) console.log(err);
  if (results.affectedRows == 1) {
    console.log("success update");
  } else {
    console.log("fail update");
  }
});
connection.end();
