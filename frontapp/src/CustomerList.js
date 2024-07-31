import { useState, useEffect } from "react";

function Customer({ list, onClick }) {
  const List = list.map((ele) => (
    <div key={ele.id}>
      <span>{ele.id}</span>
      <span>
        <a
          id={ele.id}
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onClick(ele.id);
          }}
        >
          {ele.name}
        </a>
      </span>
      <span>{ele.email}</span>
      <span>{ele.phone}</span>
      <span>{ele.address}</span>
    </div>
  ));
  return <>{List}</>;
}

export default function CustomerList(props) {
  let [customers, setCustomers] = useState([]);

  function callAPI() {
    fetch("http://localhost:80/customer")
      .then((result) => result.json())
      .then((json) => {
        setCustomers(json);
      });
  }

  useEffect(() => {
    callAPI();
  }, []);
  return (
    <>
      <h1>CustomerList</h1>;
      <Customer list={customers} onClick={props.onClick} />
    </>
  );
}
