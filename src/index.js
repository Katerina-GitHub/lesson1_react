import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MeMessage } from "./App";

const name = "меня";
const obj = { show: "hello", user: "Vasiliy" };
const arr = [23, 67, "все числа"];
const moovies = [
  { title: "the fall", year: 2013 },
  { title: "bron", year: "2011" },
];

const Message = ({ onClick }) => {
  console.log({ onClick });
  //const { onClick } = props;
  return (
    <div>
      <h1>Прием прием, планета Земля</h1>
      <h2>Nomoskaar</h2>
      <h3>Gamardjobat</h3>
      <h4>Shalom</h4>
      <button class="red" onClick={onClick}>
        click
      </button>
    </div>
  );
};

const reactElement = (
  <div class="text_white">
    <h3>
      Урра что то получается у {name}, {obj.show} от <br />
      {obj.user}, {arr[2]}
    </h3>
    <h2>Кино:</h2>
    {moovies.map((moovie) => (
      <div>
        <h4>
          {moovie.title}({moovie.year})
        </h4>
      </div>
    ))}
  </div>
);
const MyMessage = () => {
  return reactElement;
};

ReactDOM.render(
  <React.StrictMode>
    <MeMessage />
    <br />
    <hr />
    <MyMessage />
    <br />
    <hr />
    <Message
      onClick={() => {
        console.log("yay");
      }}
    />
  </React.StrictMode>,
  document.getElementById("imroot")
);
