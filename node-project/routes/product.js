const express = require("express");
const router = express.Router();

// 전체조회 /product?category=t1&price=20000 query string para
router.get("/", (req, res) => {
  const category = req.query.category;
  const price = req.query.price;
  const data = req.query;
  console.log(data);
  res.send(`product query ${category} ${price}`);
});

// 단건조회  /product/1
router.get("/:num/", (req, res) => {
  const num = req.params.num;
  console.log(num);
  res.send("product query " + num);
});

// 등록(json string) /product  proid,proname,price
router.post("/", (req, res) => {
  const proid = req.body.proid;
  const proname = req.body.proname;
  const price = req.body.price;
  console.log(req.body);
  res.send(`product query ${proid} ${proname} ${price}`);
});

//put    /product/1        json 형식으로 파라미터 전송 : prodname, price
router.put("/:proid/", (req, res) => {
  const proid = req.params.proid;
  const data = req.body;
  const result = { ...data, proid };
  res.send(result);
});

router.delete("/:proid/", (req, res) => {
  const proid = req.params.proid;
  res.send("product delete" + proid);
});

module.exports = router;
