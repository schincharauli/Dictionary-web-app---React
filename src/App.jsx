import React, { useState } from "react";
import "./App.css";
import logo from "../public/images/logo.svg";
import moonIcon from "../public/images/icon-moon.svg";
import velvetMoon from "../public/images/velvet-moon.svg";
import searchIcon from "../public/images/icon-search.svg";
import DictionaryList from "./components/DictionaryList";
import axios from "axios";

function App() {
  const [theme, setTheme] = useState("light");
  const [selectedFont, setSelectedFont] = useState("Lora");
  const [searchWord, setSearchWord] = useState("");
  const [result, setResult] = useState(null);

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

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  async function handleSearch() {
    try {
      if (searchWord.trim() === "") {
        setResult(null);
        setResult({ error: "Whoops, can't be empty..." });
      } else {
        const res = await axios.get(`${api}/${searchWord}`);
        console.log(res, "res");
        setResult(res.data[0]);
      }
    } catch (e) {
      setResult({ error: "No Definitions Found" });

      console.log({ e });
    }
  }

  return (
    <div
      style={{ fontFamily: selectedFont }}
      className={`h-full w-full pr-3 md:pl-6 md:pr-6  xl:pl-72 xl:pr-72 xl:pt-6  ${
        theme === "dark" ? "bg-dark" : ""
      }`}
    >
      <nav className="flex justify-between">
        <span>
          <a href="." onClick={() => window.location.reload()}>
            <img className="p-3" src={logo} alt="" />
          </a>
        </span>

        <div className="flex ">
          <select
            className={`text-base mr-3 hover:cursor-pointer ${
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

              <span className="ml-6" onClick={changeTheme}>
                {renderMoon()}
              </span>
            </label>
          </button>
        </div>
      </nav>

      <section className="p-3">
        <form>
          <div className="relative">
            <input
              onChange={(e) => setSearchWord(e.target.value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  e.preventDefault();
                  handleSearch();
                }
              }}
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-00"
              placeholder="Search..."
              required
            />

            <img
              src={searchIcon}
              onClick={handleSearch}
              className=" hover:cursor-pointer text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
            />
          </div>
        </form>
      </section>

      <section>
        {result && !result.error ? (
          <DictionaryList
            result={result}
            changeTheme={changeTheme}
            theme={theme}
            setTheme={setTheme}
          />
        ) : (
          result && (
            <div>
              {result.type === "empty" ? (
                <p className="text-white">{result.error}</p>
              ) : (
                <div className="custom-error-interface flex flex-col justify-center items-center  h-72">
                  <h1 className="font-bold dark:text-white">
                    No Definitions Found
                  </h1>
                  <span className="pt-3 " role="img" aria-label="Emoji">
                    {"\ud83d\ude12"} {/* U+1F612 */}
                  </span>
                  <p className="text-greyTextLightMode text-center p-4">
                    Sorry pal, we couldn't find definitions for the word you
                    were looking for. You can try the search again at later time
                    or head to the web instead.
                  </p>
                </div>
              )}
            </div>
          )
        )}
      </section>
    </div>
  );
}

export default App;
