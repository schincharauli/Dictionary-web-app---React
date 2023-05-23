import React, { useState } from "react";
import "./App.css";
import logo from "../public/images/logo.svg";
import moonIcon from "../public/images/icon-moon.svg";

function App() {
  const [theme, setTheme] = useState("light");
  const [selectedFont, setSelectedFont] = useState("Arial");

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

  return (
    <div
      style={{ fontFamily: selectedFont }}
      className={`h-screen ${theme === "dark" ? "bg-dark" : ""}`}
    >
      <nav className="flex justify-between">
        <span>
          <img className="p-3" src={logo} alt="" />
        </span>
        <select value={selectedFont} onChange={handleFontChange}>
          <option value="Inconsolata" className=" text-base">
            Mono
          </option>
          <option value="Inter" className=" text-base">
            Inter
          </option>
          <option value="Lora" className=" text-base">
            Sans Serif
          </option>
        </select>
        <button>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div
              onClick={changeTheme}
              className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-violet rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet`}
            ></div>
            <span>
              <img
                src={moonIcon}
                alt=""
                className={"dark:path-stroke-violet"}
              />
            </span>
          </label>
        </button>
      </nav>

      <section>
        {/* <p className={`dark:text-white font-Inter`}>
          This text will be white in dark mode.
        </p>
        <p className="dark:text-white font-Lora">
          This text will be white in dark mode.
        </p>
        <p className="dark:text-white font-Inconsolata">
          This text will be white in dark mode.
        </p> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aut
          earum culpa eius perspiciatis quaerat eum, consectetur asperiores
          tempore exercitationem totam excepturi ullam animi, cumque facere fuga
          minus at pariatur.
        </p>
      </section>
    </div>
  );
}

export default App;
