import { useState } from "react";
import CustomerList from "./CustomerList";
import CustomerUpdate from "./CustomerUpdate";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function CustomerComponent() {
  let [id, setId] = useState();
  return (
    <Container>
      <Row>
        <Col>
          <CustomerList
            onClick={(_id) => {
              setId(_id);
            }}
          />
        </Col>
        <Card>
          <CustomerUpdate id={id} />
        </Card>
      </Row>
    </Container>
  );
}
