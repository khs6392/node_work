//filename : array.hw.js
let arr = [
  { stdId: 1, kor: 90, eng: 80 },
  { stdId: 2, kor: 50, eng: 50 },
  { stdId: 3, kor: 60, eng: 90 },
];

// 1. kor + eng 합계순으로 정렬
arr.sort((a, b) => b.kor + b.eng - (a.kor + a.eng));
console.log("합계순 정렬 : ", arr);

// 2. 평균이 60미만이 학번만 출력        값 : [2]
let six = arr
  .filter((std) => (std.kor + std.eng) / 2 < 60)
  .map((std) => std.stdId);

console.log(six);
