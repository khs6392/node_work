// filename : process.js
// 명령행 인수
import { argv, env } from "node:process";

// argv.forEach((val, index) => {
//   console.log(`${index} : ${val}`);
// });

// 환경변수
// console.log(env.Path);
//for(of)
for (let ele of env.Path) {
  console.log(ele);
}

// error: Cannot use import statement outside a module
// npm init => package.json
