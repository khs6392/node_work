// import { legacy_createStore as createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { countSlice, store, loginSlice } from "./store";

/*
// 상태와 동작
function reducer(state, action) {
  if (action.type === "up") {
    return { ...state, count: state.count + action.inc };
  }
  return state;
}

//초기값 설정 및 스토어 생성
//value => count
const initialState = { count: 0 };
let store = createStore(reducer, initialState);
*/
function Counter() {
  // const count = useSelector((state) => state.count);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          //step => inc
          //   dispatch({ type: "up", inc: 2 });
          //   dispatch({ type: "countSlice/up", inc: 2 });
          dispatch(countSlice.actions.up(2));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

function MyPage() {
  const username = useSelector((state) => state.login.username);
  const email = useSelector((state) => state.login.email);
  const dispatch = useDispatch();
  return (
    <>
      <input
        onChange={(e) => {
          dispatch(loginSlice.actions.setUsername(e.target.value));
        }}
      ></input>
      <input
        onChange={(e) => {
          dispatch(loginSlice.actions.setEmail(e.target.value));
        }}
      ></input>
      <button>입력</button>
      <h1>username : {username}</h1>
      <h1>email : {email}</h1>
    </>
  );
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
        <MyPage />
      </Provider>
    </>
  );
}
