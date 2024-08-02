import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

export default function BoardList() {
  let [board, setBoard] = useState([]);

  function callAPI() {
    fetch("api/board")
      .then((result) => result.json())
      .then((json) => {
        setBoard(json);
      });
  }
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>내용</th>
            <th>작성일자</th>
            <th>댓글 수</th>
          </tr>
        </thead>
        <tbody>
          {board.map((ele) => (
            <tr key={ele.no}>
              <td>{ele.no}</td>
              <Link to={`/BoardInfo/${ele.no}`}>{ele.title}</Link>
              <td>{ele.writer}</td>
              <td>{ele.content}</td>
              <td>{ele.created_date}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
