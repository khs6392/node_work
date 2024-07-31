import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

export default function BoardList() {
  let [board, setBoard] = useState([]);
  let [lastPage, setLastPage] = useState(1);

  const location = useLocation();
  const search = new URLSearchParams(location.search); //? name = aaa&age = 9
  const p_page = search.get("page");
  const page = p_page === null ? 1 : Number(p_page);

  function callAPI() {
    fetch("http://localhost:80/board?page=" + page)
      .then((result) => result.json())
      .then((json) => {
        setBoard(json.list);
        setLastPage(Math.ceil(json.total / 10)); // 12.5 / 10 => 12.5 -> 13
      });
  }

  useEffect(() => {
    callAPI();
  }, [page]);
  return (
    <>
      <h1>Board List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>내용</th>
            <th>날짜</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {board.map((ele) => (
            <tr key={ele.seq}>
              <td>{ele.seq}</td>
              <td>
                <Link to={`/boardInfo/${ele.seq}`}>{ele.title}</Link>
              </td>
              <td>{ele.content}</td>
              <td>{ele.wdt}</td>
              <td>{ele.writer}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {lastPage}
      {[...Array(lastPage)].map((p) => (
        <Link to={"/boardList?page=1" + p}>{p}</Link>
      ))}
    </>
  );
}
