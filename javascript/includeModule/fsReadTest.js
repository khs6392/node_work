//filename : fsReadTest.js
import fs from "fs";

// 비동기
fs.readFile("c:/temp/exam1.js", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  // console.log(data);
});
console.log("2. the end");

//동기식
let data = fs.readFileSync("c:/temp/exam1.js");
console.log(data.toString());
