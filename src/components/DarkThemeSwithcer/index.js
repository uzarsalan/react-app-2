import DarkThemeIcon from "../svg/DarkThemeIcon";
import style from "./DarkThemeSwitcher.module.css";

const DarkThemeSwitcher = ({ darkTheme, setDarkTheme }) => {
  return (
    <button
      className={`mx-auto block ${style.initial} ${darkTheme && style.rotate}`}
      onClick={() => setDarkTheme(!darkTheme)}
    >
      <DarkThemeIcon darkTheme={darkTheme} />
    </button>
  );
};

export default DarkThemeSwitcher;
