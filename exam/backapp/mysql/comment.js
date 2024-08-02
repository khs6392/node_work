const sql = {
  CommentList: "select * from t_comment_board ",
  CommentGet: "select * from t_comment_board where no =?",
};

module.exports = sql;
