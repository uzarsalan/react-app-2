const DarkThemeSwitcher = ({ darkTheme, setDarkTheme }) => {
  return (
    <div>
      <label for="themeswitcher">Темная тема</label>
      <input
        id="themeswitcher"
        type="checkbox"
        checked={darkTheme}
        onChange={() => setDarkTheme(!darkTheme)}
      />
    </div>
  );
};

export default DarkThemeSwitcher;
