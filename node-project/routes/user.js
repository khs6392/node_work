const express = require("express");
const router = express.Router();

//http://localhost/member?page=1&search=choi
//전체조회
router.get("/", (req, res) => {
  //쿼리스트링
  const page = req.query.page;
  const search = req.query.search;
  const data = req.query; // vo객체

  //세션
  const email = req.session.email;

  //쿠키 읽기
  console.log("cookie : " + req.cookies.popupyn);

  //쿠키 저장
  res.cookie("email", email, { expires: new Date(Date.now() + 15000) });

  res.send(`user query: ${email}`);
});

//단건조회
//http://localhost/member/park
router.get("/:username/", (req, res) => {
  const username = req.params.username;
  res.send("user get : " + username);
});

router.post("/", (req, res) => {
  const username = req.body.username;
  const addr = req.body.addr;
  res.send(`user post : ${username} ${addr}`);
});

router.put("/:userid/", (req, res) => {
  const userid = req.params.userid;
  const data = req.body;
  const result = { ...data, userid };
  res.send(result);
});

router.delete("/:userid/", (req, res) => {
  const userid = req.params.userid;
  res.send("user delete" + userid);
});

module.exports = router;
