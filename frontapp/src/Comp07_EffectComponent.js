import { useState, useEffect } from "react";

function Todo({ todos }) {
  //for,map --> <div>
  const todoList = todos.map((ele) => <div key={ele.id}>{ele.title}</div>);
  return <>{todoList}</>;
} //end of Todo

export default function EffectComponent() {
  let [count, setCount] = useState(1);
  let [todos, setTodos] = useState([]);

  function callAPI() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodos(json); //state 변경하면 리랜더링
      });
  }

  //랜더링후에 한번만 실행
  useEffect(() => {
    // callAPI();
    console.log("effect");
    return () => {
      console.log("clean up");
    };
  }, [count]);
  return (
    <>
      <h1>side effect(부수효과)</h1>
      <div>{count}</div>
      <div>
        <Todo todos={todos} />
      </div>
    </>
  );
} //end of useEffect
