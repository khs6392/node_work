function Reply({ id, title, writer }) {
  return (
    <>
      <span>{id}</span>
      <span>{title}</span>
      <span>{writer}</span>
    </>
  );
}

export default function Replys({ datas }) {
  const reply = datas.map((ele) => (
    <div key={ele.id}>
      <Reply {...ele} />
    </div>
  ));
  return <>{reply}</>;
}
