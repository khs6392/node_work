const customerData = [
  {
    id: 1,
    name: "홍길동",
    email: "z@z.z",
    phone: "010-111-2222",
    address: "대구",
  },
  {
    id: 2,
    name: "이몽룡",
    email: "x@x.x",
    phone: "010-222-3333",
    address: "문경",
  },
  {
    id: 3,
    name: "성춘향",
    email: "sung@daum.net",
    phone: "010-333-4444",
    address: null,
  },
  {
    id: 4,
    name: "리액트",
    email: "react@react.com",
    phone: "010-999-9999",
    address: "경북",
  },
  {
    id: 26,
    name: "1",
    email: "1",
    phone: "1",
    address: "1",
  },
];

// 반복 함수의 리턴값을 모아서 새로운 배열을 만듬
let ids = customerData.map((ele) => "<td>" + ele.id + "</td>");
console.log(ids);
