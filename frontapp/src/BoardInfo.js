import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

export default function BoardInfo() {
  const { seq } = useParams();
  let [board, setBoard] = useState([]);
  const navigator = useNavigate();

  const handlerDelete = async (e) => {
    if (window.confirm("삭제할까요?")) {
      await axios.delete("http://localhost:80/board/" + seq);
      navigator("/BoardList");
    }
  };

  function callAPI() {
    fetch("http://localhost:80/board/" + seq)
      .then((result) => result.json())
      .then((json) => {
        setBoard(json[0]);
      });
  }

  useEffect(() => {
    callAPI();
  }, [seq]);

  return (
    <>
      <Container>
        <h1 className="text-center">게시글보기</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>Date</th>
              <th>Writer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{board.seq}</td>
              <td>{board.title}</td>
              <td>{board.content}</td>
              <td>{board.wdt}</td>
              <td>{board.writer}</td>
            </tr>
          </tbody>
        </Table>
        <Row className="justify-content-center mt-3">
          <Col xs="auto">
            <Link to={"/boardUpdate/" + seq}>
              <Button variant="warning" type="button">
                수정
              </Button>
            </Link>
          </Col>
          <Col xs="auto">
            <Button variant="danger" type="button" onClick={handlerDelete}>
              삭제
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
