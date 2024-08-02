const sql = {
  BoardInsert: "insert into t_board_board set ?",
  BoardUpdate: "update t_board_board set ? where no = ?",
  BoardList: "select * from t_board_board ",
  BoardGet: "select * from t_board_board where no =?",
};

module.exports = sql;
