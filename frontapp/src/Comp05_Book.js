import { useState } from "react";

//중괄호 없이 props 쓸경우 props.title
function Header(prop) {
  console.log(prop);

  //function handlerClick(e) { }
  const handlerClick = (e) => {
    e.preventDefault();
    prop.onChangeMode();
  };

  return (
    <>
      <header>
        <h1>
          <a href="/" onClick={handlerClick}>
            {prop.title}
          </a>
        </h1>
      </header>
    </>
  );
}

function Nav(props) {
  const lis = props.topics.map((ele) => (
    <li key={ele.id}>
      <a
        id={ele.id}
        href={"/read/" + ele.id}
        onClick={(e) => {
          e.preventDefault();
          props.onChangeMode(ele.id);
        }}
      >
        {ele.title}
      </a>
    </li>
  ));
  return (
    <>
      <nav>
        <ol>{lis}</ol>
      </nav>
    </>
  );
}

function Article({ title, body }) {
  return (
    <>
      <article>
        <h2>{title}</h2>
        {body}
      </article>
    </>
  );
}

function Update(props) {
  return (
    <article>
      <h2>Update</h2>
      <form>
        <p>
          <input name="title" placeholder="title" value={props.title}></input>
        </p>
        <p>
          <input name="body" placeholder="body" value={props.body}></input>
        </p>
        <p>
          <input type="submit" value="create"></input>
        </p>
      </form>
    </article>
  );
}

function Create({ onCreate }) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          onCreate(title, body);
        }}
      >
        <p>
          <input name="title" placeholder="title"></input>
        </p>
        <p>
          <input name="body" placeholder="body"></input>
        </p>
        <p>
          <input type="submit" value="create"></input>
        </p>
      </form>
    </article>
  );
}

export default function Book() {
  let [topics, setTopic] = useState([
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "javascript is..." },
  ]);
  let [lastId, setLastId] = useState(4);
  let [mode, setMode] = useState("WELCOME");
  let [id, setId] = useState(2);
  let content;
  if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(title, body) => {
          setTopic([...topics, { id: lastId, title, body }]);
          setLastId(lastId + 1);
        }}
      />
    );
  } else if (mode === "UPDATE") {
    content = <Update title="test" body="test is..." />;
  } else if (mode === "WELCOME") {
    content = (
      <>
        <Article title="Welcome" body="Hello, Web" />
        <button
          onClick={() => {
            setMode("CREATE");
          }}
        >
          create
        </button>
      </>
    );
  } else if (mode === "READ") {
    let { title, body } = topics.find((ele) => id === ele.id);
    content = (
      <>
        <Article title={title} body={body} />
        <button
          onClick={() => {
            setMode("UPDATE");
          }}
        >
          update
        </button>
      </>
    );
  }
  return (
    <div>
      <>
        <Header
          title="WEB"
          onChangeMode={() => {
            setMode("WELCOME");
          }}
        />
        <Nav
          topics={topics}
          onChangeMode={(_id) => {
            setMode("READ");
            setId(_id);
          }}
        />
        {content}
      </>
    </div>
  );
}
