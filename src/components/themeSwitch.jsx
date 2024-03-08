const ThemeSwitch = ({ theme, setTheme }) => {
  return (
    <div
      className={`${
        theme ? "darBgText" : "lightBgText"
      } font-bold flex w-44 h-9 mb-8 mx-auto items-center gap-4`}
      onClick={() => {
        setTheme(!theme);
      }}
    >
      <h1 className="">Light</h1>
      <div
        className={`${
          theme ? "darBgGreen" : "lightBgGray"
        } w-24 h-8 rounded-2xl p-2`}
      >
        <div
          className={`w-4 h-4 rounded-full ${
            theme
              ? "darBg translate-x-9 transition-transform"
              : "lightBg translate-x-[-9] transition-transform"
          }`}
        ></div>
      </div>
      <h1>Dark</h1>
    </div>
  );
};

export default ThemeSwitch;
