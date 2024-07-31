import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function CustomerUpdate(props) {
  let [customers, setCustomers] = useState([]);
  function callAPI() {
    if (!props.id) {
      return;
    }
    fetch("http://localhost:80/customer/" + props.id)
      .then((result) => result.json())
      .then((json) => {
        setCustomers(json[0]);
      });
  }

  useEffect(() => {
    callAPI();
  }, [props.id]);
  return (
    <>
      <form>
        <Button type="reset" className="btn-success">
          초기화
        </Button>
        <Button type="button" className="btn-warning">
          삭제
        </Button>
        <Button type="submit" className="btn-info">
          저장
        </Button>
        <p>
          <input value={customers.id}></input>
        </p>
        <p>
          <input value={customers.name}></input>
        </p>
        <p>
          <input value={customers.email}></input>
        </p>
        <p>
          <input value={customers.phone}></input>
        </p>
        <p>
          <input value={customers.address}></input>
        </p>
      </form>
    </>
  );
}
