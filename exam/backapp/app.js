const express = require("express");

const customerRouter = require("./routes/customer.js");
const boardRouter = require("./routes/board.js");
const commentRouter = require("./routes/comment.js");

const cors = require("cors");

const app = express();
const port = 80;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (rep, res) => {
  res.send("hello world!!!");
});

app.use("/customer", customerRouter);
app.use("/api/board", boardRouter);
app.use("/api/comment", commentRouter);

//에러페이지

app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
});
