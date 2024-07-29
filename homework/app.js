const express = require("express");
const boardRouter = require("./routes/board.js");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/board", boardRouter);

app.get("/", (rep, res) => {
  res.send("안녕하세요!!!");
});

app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
});
