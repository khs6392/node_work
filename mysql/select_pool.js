// mysql 모듈 로드
const mysql = require("mysql2");

// mysql 접속 정보
const conn = {
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "hr",
  database: "shop",
  connectionLimit: 10,
};

// DB 커넥션 생성
let pool = mysql.createPool(conn);

//connection 가져오기
pool.getConnection((err, connection) => {
  // 쿼리실행
  connection.query("select * from customer", (err, result, fields) => {
    if (err) console.log(err);
    console.log(result);
  });
  //connection 반납
  connection.release();
});
