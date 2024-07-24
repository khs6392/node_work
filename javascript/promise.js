//filename : promise.js
//비동기 처리

//setInterval //반복 실행
//setTimeout //한번만 실행
function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("time out");
    }, 4000);
  });
}
// 1. then
delay().then((result) => console.log(result));

// 2. await : 익명함수
let result = async function () {
  return await delay();
};
console.log(result());

// 3. 이름 있는 함수 -> 호출
async function delayAwait() {
  let result = await delay();
  console.log("await", result);
}
delayAwait();
