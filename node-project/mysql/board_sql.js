const sql = {
  boardList: "select * from board order by seq desc limit ?, 10",
  boardCount: "select count(*) cnt from board",
  boardInfo: "select * from board where seq=?",
  boardInsert: "insert into board set ?",
  boardUpdate: "update board set ? where seq=?",
  boardDelete: "delete from board where seq=?",
};

module.exports = sql;
