import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import BoardList from "./BoardList";
import BoardInsert from "./BoardInsert";
import BoardInfo from "./BoardInfo";
import BoardUpdate from "./BoardUpdate";

export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ListGroup>
        {location.pathname === "/" && (
          <ListGroup.Item>
            <NavLink to="/" className="nav-link">
              <h1>게시판</h1>
              <ListGroup.Item>
                커뮤니티 게시판 입니다. *본 게시판은 따뜻한 소통과 자유롭게 정보
                공유를 위해 운영되는 페이지입니다. * 욕설, 비방, 광고 등
                타인에게 불쾌감을 줄 수 있는 내용은 삼가주시기 바랍니다
              </ListGroup.Item>
            </NavLink>
          </ListGroup.Item>
        )}
        <ListGroup.Item>
          <NavLink to="/" className="nav-link">
            <Button variant="primary">Home</Button>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink to="/BoardList" className="nav-link">
            <Button variant="info">전체조회</Button>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item>
          <NavLink to="/BoardInsert" className="nav-link">
            <Button variant="dark">글 등록</Button>
          </NavLink>
        </ListGroup.Item>
      </ListGroup>

      <Routes>
        <Route path="/BoardList" element={<BoardList />} />
        <Route path="/BoardInsert" element={<BoardInsert />} />
        <Route path="/BoardInfo/:no" element={<BoardInfo />} />
        <Route path="/BoardUpdate/:no" element={<BoardUpdate />} />
      </Routes>
    </div>
  );
}
