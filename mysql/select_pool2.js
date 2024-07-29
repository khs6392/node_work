const mysql = require("./pool_promise.js");
let sql = "select * from customer";
// 쿼리실행
mysql.query(sql).then((result) => console.log(result));
