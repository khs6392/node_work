import Replys from "./Reply";

function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && "✔"}
    </li>
  );
}

function Items({ todos }) {
  //for, map
  //   const item = todos.map((ele) => <Item name={ele.name} isPacked={ele.isPacked}/>);
  const item = todos.map((ele, idx) => <Item key={idx} {...ele} />);
  return <> {item}</>; // 반복일문 경우 빈태그
}

export default function PackingList() {
  let todos = [
    { name: "Space suit", isPacked: true },
    { name: "Helmet with a golden leaf", isPacked: true },
    { name: "Photo of Tam", isPacked: false },
  ];

  const replyList = [
    { id: 1, title: "첫번째 글", wirter: "홍길동" },
    { id: 2, title: "두번째 글", wirter: "김유신" },
    { id: 3, title: "세번째 글", wirter: "이기자" },
  ];

  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Items todos={todos} />
      </ul>
      <h2>댓글리스트</h2>
      <Replys datas={replyList} />
    </section>
  );
}
