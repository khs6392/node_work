import { Routes, Route, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import BookList from "./BookList";
import BookInsert from "./BookInsert";

export default function App() {
  return (
    <div className="App">
      <h1>React Router Test</h1>
      <ListGroup>
        <ListGroup.Item>
          <NavLink to="/BookList">
            <Button variant="info">책 목록</Button>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink to="/BookInsert">
            <Button variant="primary">책 추가</Button>
          </NavLink>
        </ListGroup.Item>
      </ListGroup>
      <Routes>
        <Route path="/BookList" element={<BookList />}></Route>
        <Route path="/BookInsert" element={<BookInsert />}></Route>
        {/* <Route path="/BookInfo/:seq" element={<BookInfo />}></Route> */}
        {/* <Route path="/BookUpdate/:seq" element={<BookUpdate />}></Route> */}
      </Routes>
    </div>
  );
}
