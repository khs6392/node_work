import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BoardUpdate() {
  const { seq } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", content: "", writer: "" });

  useEffect(() => {
    const loadBoardData = async () => {
      const response = await fetch("http://localhost:80/board/" + seq);
      const json = await response.json();
      setForm(json[0]);
    };
    loadBoardData();
  }, [seq]);

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSave = async () => {
    if (form.title === "") {
      alert("제목 입력하세요");
    } else if (form.content === "") {
      alert("내용 입력하세요");
    } else {
      if (window.confirm("위 내용을 저장하시겠습니까?")) {
        await axios.put("http://localhost:80/board/" + seq, form);
        navigate("/");
      }
    }
  };

  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>제목</Form.Label>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              name="title"
              value={form.title}
              onChange={handlerChange}
              placeholder="제목 입력"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="content">
            <Form.Label>내용</Form.Label>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              name="content"
              value={form.content}
              onChange={handlerChange}
              placeholder="내용 입력"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="writer">
            <Form.Label>작성자</Form.Label>
            <Form.Control
              name="writer"
              value={form.writer}
              onChange={handlerChange}
              placeholder="작성자"
            />
          </Form.Group>

          <Button variant="dark" onClick={handlerSave}>
            수정
          </Button>
        </Form>
      </Container>
    </>
  );
}
