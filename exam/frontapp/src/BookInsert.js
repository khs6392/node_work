export default function BookInsert() {
  const navigator = useNavigate();
  let [form, setForm] = useState({ title: "", content: "", writer: "" });

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSave = async () => {
    //ajax 등록처리
    if (form.name === "") {
      alert("이름 입력하세요");
    } else if (form.writer === "") {
      alert("작성자 입력하세요");
    } else {
      if (window.confirm("위 내용을 저장하시겠습니까?")) {
        await axios.post("http://localhost:80/board", form);
      }
      //목록으로 이동
      navigator("/BoardList");
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

          <Form.Group className="mb-3" controlId="content">
            <Form.Label>작성자</Form.Label>
            <Form.Control
              name="writer"
              value={form.writer}
              onChange={handlerChange}
              placeholder="작성자"
            />
          </Form.Group>

          <Button variant="dark" onClick={handlerSave}>
            저장
          </Button>
        </Form>
      </Container>
    </>
  );
}
