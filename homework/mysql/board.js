const sql = {
  List: "select * from board ",
  Get: "select * from board where seq =?",
  Insert: "insert into board set ? ",
  Update: "update board set ? where seq = ? ",
  Delete: "delete from board where seq =?",
};

module.exports = sql;
