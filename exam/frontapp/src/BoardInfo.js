import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Row, Col, Button } from "react-bootstrap";

export default function BoardInfo() {
  const { no } = useParams();
  let [board, setBoard] = useState([]);
  let [comment, setComment] = useState([]);

  function callAPI() {
    fetch("api/board/" + no)
      .then((result) => result.json())
      .then((json) => {
        setBoard(json[0]);
      });

    fetch("api/comment/" + no)
      .then((result) => result.json())
      .then((json) => {
        setComment(json[0]);
      });
  }

  useEffect(() => {
    callAPI();
  }, [no]);

  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>작성일</th>
              <th>이름</th>
              <th>제목</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{board.no}</td>
              <td>{board.created_date}</td>
              <td>{board.writer}</td>
              <td>{board.title}</td>
              <td>{board.content}</td>
            </tr>
          </tbody>
        </Table>
        <Row className="justify-content-center mt-3">
          <Col xs="auto">
            <Link to={"/BoardUpdate/" + no}>
              <Button variant="warning" type="button">
                수정
              </Button>
            </Link>
          </Col>
        </Row>
        {comment.content}
      </Container>
    </>
  );
}
