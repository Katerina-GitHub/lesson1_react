import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [msgList, setMsglist] = useState([]);

  const sendMsg = () => setMsglist(document.write("Ваше сообщение отправлено"));

  return (
    (<Form />),
    (
      <div className="App">
        <h1>Messages</h1>
        {msgList.map((msg) => (
          <div>
            <p key={msg.id}>
              {msg.author}
              {msg.text}
            </p>
            <button onClick={sendMsg}>Отправить</button>
          </div>
        ))}
      </div>
    )
  );
}
export default App;
