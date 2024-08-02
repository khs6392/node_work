import { useEffect, useState } from "react";

export default function Fetch() {
  const [todo, setTodo] = useState([]);

  function callAPI() {
    const url = process.env.NEXT_PUBLIC_TODO_URL;
    fetch(url)
      .then((result) => result.json())
      .then((data) => setTodo(data));
  }

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <>
      <div>fetch</div>
      <ul>
        {todo.map((ele) => (
          <li key={ele.id}>{ele.title}</li>
        ))}
      </ul>
    </>
  );
}
