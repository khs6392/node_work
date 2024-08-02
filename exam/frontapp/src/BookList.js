import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

export default function BookList() {
  let [book, setBook] = useState([]);

  function callAPI() {
    fetch("api/book")
      .then((result) => result.json())
      .then((json) => {
        setBook(json);
      });
  }
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <>
      <h1>BookList</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>작성자</th>
            <th>발행자</th>
            <th>날짜</th>
            <th>정보</th>
          </tr>
        </thead>
        <tbody>
          {book.map((ele) => (
            <tr key={ele.no}>
              <td>{ele.no}</td>
              <td>{ele.name}</td>
              <td>{ele.writer}</td>
              <td>{ele.publisher}</td>
              <td>{ele.publication_date}</td>
              <td>{ele.info}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
