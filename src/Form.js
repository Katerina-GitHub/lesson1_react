import React, { useState, useEffect } from "react";

function Form() {
  const [msgForm, setMsgform] = useState("Труляля", "kuku");

  useEffect(() => {
    loadAnswer();
  });
  const loadAnswer = async () =>
    document.write(
      "Вы подписаны на новости. Каждый день мы будем присылать 1000 сообщений, устанете удалять."
    );

  return (
    <form className="Form">
      <input value={msgForm}></input>
      <button onClick={setMsgform} className="sent_button">
        Отправить
      </button>
    </form>
  );
}

export default Form;
