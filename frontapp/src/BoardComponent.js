import { Routes, Route, NavLink } from "react-router-dom";
// import BoardList from "./BoardList";
// import BoardInfo from "./BoardInfo";
// import BoardUpdate from "./BoardUpdate";
// import BoardInsert from "./BoardInsert";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function App() {
  return (
    <div className="App">
      <h1>React Router Test</h1>
      <ListGroup>
        <ListGroup.Item>
          <NavLink to="/boardList">
            <Button variant="info">게시판</Button>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink to="/boardInsert">
            <Button variant="primary">글쓰기</Button>
          </NavLink>
        </ListGroup.Item>
      </ListGroup>
      {/* <Routes>
        <Route path="/BoardList" element={<BoardList />}></Route>
        <Route path="/BoardInfo/:seq" element={<BoardInfo />}></Route>
        <Route path="/BoardUpdate/:seq" element={<BoardUpdate />}></Route>
        <Route path="/BoardInsert" element={<BoardInsert />}></Route>
      </Routes> */}
    </div>
  );
}
