// state, ref, event => form filed
import { useState, useRef } from "react";
export default function App() {
  //   let [message, setMessage] = useState("");
  //   let [email, setEmail] = useState("");
  let [form, setForm] = useState({ message: "", email: "" });
  let inputMessage = useRef(); //document.getElementById("Xxxx")

  function handlerChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return (
    <>
      {form.message} {form.email}
      <form>
        <input
          name="message"
          value={form.message}
          onChange={handlerChange}
          ref={inputMessage}
        ></input>
        <p>
          <input
            name="email"
            value={form.email}
            onChange={handlerChange}
          ></input>
        </p>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setForm({ message: "", email: "" });
            console.log(inputMessage);
            inputMessage.current.focus();
          }}
        >
          초기화
        </button>
      </form>
    </>
  );
}
