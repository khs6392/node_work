/*
   array.map, filter, sort ....
 */

let arr = [
  { username: "choi", dept: "개발", sal: 2000 },
  { username: "park", dept: "인사", sal: 1000 },
  { username: "kim", dept: "개발", sal: 1500 },
];
console.log(arr);
// username이 park 인사원 (find)
let = findResult = arr.find((emp) => emp.username == "park");
console.log("park find : ", findResult);

// 1. sal 1500 이상인 사원 조회 filter
let filterResult = arr.filter((emp) => emp.sal >= 1500);
console.log("sal >= 1500 : ", filterResult);

// 2. 급여 -> username 오름차순 sort ,
arr.sort((a, b) => a.sal - b.sal);
console.log("sal sort:", arr);

//arr.sort((a, b) => a.username == b.username ? 0 :  a.username > b.username? 1: -1);
function sortCompareFunc(a, b) {
  if (a.username == b.username) return 0;
  else if (a.username > b.username) return 1;
  else return -1;
}
arr.sort(sortCompareFunc);
console.log("sal sort:", arr);

// 3. 급여합계 reduce
var result = arr.reduce((total, emp) => (total += emp.sal), 0);
console.log("급여합계 : ", result);

// 4. 모든 사원의 급여를 500인상 (map),   파괴함수 리턴값 X
let mapResult = arr.map((emp) => {
  return { ...emp, sal: emp.sal + 500 };
});
console.log("급여 인상: ", mapResult);

//5. ['kim', 'choi']
let filterMapResult = arr
  .filter((emp) => emp.sal >= 2000)
  .map((emp) => emp.username);
console.log("sal > 2000 이상인 사원명 :", filterMapResult);
