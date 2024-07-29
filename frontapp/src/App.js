import "./App.css";
import Toolbar from "./Event";

// 컴포넌트
function Header({ title, color = "cyan", onChangeMode }) {
  const clickHandler = (event) => {
    event.preventDefault();
    alert("클릭됨");
    onChangeMode();
  };
  return (
    <header>
      <h2 style={{ color: color }}>
        <a href="/" onClick={clickHandler}>
          {title}
        </a>
      </h2>
    </header>
  );
}

function Nav({ topics }) {
  // const lis = [];
  // for (let i = 0; i < topic.length; i++) {
  //   lis.push(<li>{topic[i].title}</li>);
  // }
  const lis = topics.map((ele) => <li>{ele.title}</li>); // map 함수
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article({ content, fruits }) {
  return (
    <article>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
      <p>{content.name}</p>
      <ul>
        {fruits.map((ele) => (
          <li>{ele}</li>
        ))}
      </ul>
    </article>
  );
}

const topic = [
  { id: 1, title: "html", body: "html is..." },
  { id: 2, title: "css", body: "css is..." },
  { id: 3, title: "javascript", body: "javascript is..." },
];

function Avatar({ name, width, height, src }) {
  return (
    <img
      className="avatar"
      src={src}
      alt={name}
      width={width}
      height={height}
    />
  );
}

function Profile(props) {
  // return <Avatar name = {name} src ={src} />;
  return <Avatar {...props} />;
}

function App() {
  return (
    <div className="App">
      <Header
        title="Web"
        onChangeMode={() => {
          alert("핸들러 전달");
        }}
      />
      <Nav topics={topic} />
      <Toolbar />
      <Article
        content={{ title: "Hello", body: "Welcome", name: "Tom" }}
        fruits={["바나나", "사과", "포도"]}
      />
      <Profile name="톰" width="100" height="100" src="logo512.png" />
    </div>
  );
}

export default App;
