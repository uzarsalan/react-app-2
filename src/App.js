import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Image from "./components/Image";
import Menu from "./components/Menu";
import CartWidget from "./components/CartWidget";
import DarkThemeSwitcher from "./components/DarkThemeSwithcer";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const setDarkTheme = (value) => {
    setThemeDark(value);
  };

  const [themeDark, setThemeDark] = useState(true);

  return (
    <div className="App p-2">
      <DarkThemeSwitcher darkTheme={themeDark} setDarkTheme={setDarkTheme} />
      <CartWidget cart={cart} />
      <Menu themeDark={themeDark} onItemBuy={(item) => addToCart(item)}></Menu>
    </div>
  );
}

export default App;
