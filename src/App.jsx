import React, { useState } from "react";
import "./App.css";
import logo from "../public/images/logo.svg";
import moonIcon from "../public/images/icon-moon.svg";
import velvetMoon from "../public/images/velvet-moon.svg";
import searchIcon from "../public/images/icon-search.svg";

function App() {
  const [theme, setTheme] = useState("light");
  const [selectedFont, setSelectedFont] = useState("Lora");
  const [inputValue, setInputValue] = useState("");

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const renderMoon = () => {
    if (theme === "dark") {
      return <img src={velvetMoon} alt="" className="moon-icon-violet" />;
    } else {
      return <img src={moonIcon} alt="" />;
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      style={{ fontFamily: selectedFont }}
      className={`h-screen ${theme === "dark" ? "bg-dark" : ""}`}
    >
      <nav className="flex justify-between">
        <span>
          <img className="p-3" src={logo} alt="" />
        </span>
        <select
          className={`text-base ${
            theme === "dark" ? "dark:bg-dark && text-white" : ""
          }`}
          value={selectedFont}
          onChange={handleFontChange}
        >
          <option value="Inconsolata">Mono</option>
          <option value="Inter">Inter</option>
          <option value="Lora">Sans Serif</option>
        </select>
        <div className="h-8 w-0.5 mt-3 bg-gray-300"></div>

        <button>
          <label className="relative inline-flex items-center cursor-pointer m-3">
            <input type="checkbox" className="sr-only peer" />
            <div
              onClick={changeTheme}
              className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-violet rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet`}
            ></div>
            <span className="ml-6">{renderMoon()}</span>
          </label>
        </button>
      </nav>

      <section className="p-3">
        <form>
          <div class="relative">
            <input
              value={inputValue}
              onChange={handleChange}
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
            />

            <img
              src={searchIcon}
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
            />
          </div>
        </form>
        <p>Input Value: {inputValue}</p>
      </section>
    </div>
  );
}

export default App;
