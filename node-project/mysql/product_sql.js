//CRUD 쿼리 작성
const sql = {
  List: "select * from product ",
  Get: "select * from product where prodnum =?",
  Insert: "insert into product set ? ",
  Update: "update product set ? where prodnum = ? ",
  Delete: "delete from product where prodnum =?",
};

module.exports = sql;
