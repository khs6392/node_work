const pool = require("./pool_promise.js");

// 쿼리실행
const name = "test";
const email = "d@d.c";
const phone = "010-111-2222";
let sql = `insert into customer (name, email, phone) values('${name}','${email}', '${phone}') `;

pool.query(sql, (err, results, fields) => {
  if (err) console.log(err);
  console.log(results.affectedRows, results.insertId);
});
