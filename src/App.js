import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Image from "./components/Image";

function App() {
  let imgUrl =
    "https://fastly.picsum.photos/id/586/200/300.jpg?hmac=Ugf94OPRVzdbHxLu5sunf4PTa53u3gDVzdsh5jFCwQE";

  let [a, setA] = useState(0);

  let items = [
    { imgSrc: logo, text: "new text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
    { imgSrc: imgUrl, text: "Second text" },
  ];

  setInterval(() => {
    setA(++a);
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        {items.map((item) => (
          <Image imgSrc={item.imgSrc} text={item.text} />
        ))}

        {a}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
