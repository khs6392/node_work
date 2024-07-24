// objectLiteral.js
// 객체 상수
let username = "hello";
let temp = ` `;
let getName = function () {};
let obj = { username, hobby: [], addr: { zip: 50001, si: "대구" }, getName }; // 어떤타입도 올수잇음

// 객체구조분해 자주 쓰임
let { addr, hobby } = obj; //구조분해
//let addr = obj.addr;
//let hobby = obj.hobby;

console.log(addr.zip);

//배열 구조분해( ... --> rest 연산자)
let score = [90, 80, 100, 50, 70];
let [fst, snd, ...rest] = score;
console.log(fst, snd, rest);

// 배열 얕은 복사
let copyScore = score;
copyScore[0] = 10;
console.log(score[0], copyScore[0]);

// 배열복사(깊은복사) spread 연산자 이용
let deepCopyScore = [...score];
deepCopyScore[0] = 50;
console.log(score[0], deepCopyScore[0]);

// 객체 얕은복사 // 객체를 참조하여 값을 변경하면 객체의 값도 바뀜
let emp = { username: "choi", dept: "개발", sal: 5000 };
let copyEmp = emp;
copyEmp.sal = 1000;
console.log(emp.sal, copyEmp.sal);

// 객체 깊은복사 // 새로운 객체를 만든다는 개념 객체를 풀어서
let deepCopyEmp = { ...emp, sal: 3000 };
//deepCopyEmp.sal = 3000;
console.log(emp, deepCopyEmp);
