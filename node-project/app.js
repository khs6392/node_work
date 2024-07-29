const express = require("express");
const userRouter = require("./routes/user.js");

const productRouter = require("./routes/product.js");
const loginRouter = require("./routes/login.js");
const customerRouter = require("./routes/customer_pool.js");

const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const fileStore = require("session-file-store")(session);

const multer = require("multer");
const upload = multer({ dest: "c:/temp" }); //업로드 제한, 업로드 위치 설정

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
// app.use(morgan("combined"));

app.use(morgan(":date[web] :method :url"));
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      //secure: true,
      maxAge: 3600000, //1분
    },
    // store: new fileStore(),
  })
);

//multer
app.post("/upload", upload.single("profile"), (req, res) => {
  console.log(req.file);
  const originalName = req.file.originalname;
  const fileName = req.file.filename;
  res.send(`upload success + ${originalName} ${fileName}`);
});

app.get("/", (rep, res) => {
  res.send("hello world!!!");
});

app.use("/member", userRouter);
app.use("/product", productRouter);
app.use("/", loginRouter);
app.use("/customer", customerRouter);

//에러페이지

app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
});
