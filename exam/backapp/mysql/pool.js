// 최종형태

// mysql 모듈 로드
const mysql = require("mysql2");
const csql = require("./customer_sql.js");
const bsql = require("./board.js");
const commentsql = require("./comment.js");
const sql = { ...csql, ...bsql, commentsql };
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

function query(key, data) {
  return new Promise((resolve, reject) => {
    pool.query(sql[key], data, (err, result, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = { pool, query };
