// import { useState } from "react";
import { useReducer } from "react";
//상태 변경하는 과정을 리듀서함수 안에 은닉
//reducer 함수 작성
function countReducer(oldCount, action) {
  if (action.type === "UP") {
    return oldCount + action.number; //객체라면 -> return{...count,}
  } else if (action.type === "DOWN") {
    return oldCount - action.number;
  } else if (action.type === "RESET") {
    return action.number;
  }
}

export default function App() {
  //  let [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(countReducer, 0);
  function down() {
    //setCount(count-1);
    dispatch({ type: "DOWN", number: 10 });
  }
  function up() {
    //setCount(count+1);
    dispatch({ type: "UP", number: 10 });
  }
  function reset() {
    //setCount(0);
    dispatch({ type: "RESET", number: 0 });
  }
  return (
    <div>
      <input type="button" value="-" onClick={down}></input>
      <input type="button" value="0" onClick={reset}></input>
      <input type="button" value="+" onClick={up}></input>
      <span>{count}</span>
    </div>
  );
}
