import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Image from "./components/Image";
import Menu from "./pages/MenuPage";
import CartWidget from "./components/CartWidget";
import DarkThemeSwitcher from "./components/DarkThemeSwithcer";
import { Outlet } from "react-router-dom";
import MainMenu from "./components/MainMenu";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const setDarkTheme = (value) => {
    setThemeDark(value);
  };

  const [themeDark, setThemeDark] = useState(false);

  return (
    <div
      className={
        "p-2 min-h-screen " + (themeDark ? "dark bg-slate-950 text-white" : "")
      }
    >
      <div className="container mx-auto">
        <DarkThemeSwitcher darkTheme={themeDark} setDarkTheme={setDarkTheme} />
        <MainMenu />
        <CartWidget cart={cart} />
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
