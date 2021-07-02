import { useEffect, useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { evaluate } from "mathjs";

function App() {
  const [theme, setTheme] = useLocalStorage("dark-theme", false);
  const [isDark, setIsDark] = useState(theme);
  const [inputValue, setInputValue] = useState("");
  const [calStr, setCalStr] = useState("");

  useEffect(() => {
    if (isDark) document.body.classList.add("dark-theme");
    else document.body.classList.remove("dark-theme");
  }, [isDark]);

  const handleTheme = () => {
    setIsDark(!isDark);
    setTheme(!theme);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleNum = (e) => {
    const val = e.target.innerText;
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (nums.includes(parseInt(val))) {
      if (typeof inputValue === "number") {
        setInputValue(val);
        setCalStr("");
      } else {
        setInputValue(inputValue + val);
      }
    } else {
      setInputValue(` ${inputValue} ${val} `);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCalStr(inputValue);
    let x = inputValue.replace(/x/g, "*");
    setInputValue(evaluate(x));
  };

  const handleReset = () => {
    setCalStr("");
    setInputValue("");
  };

  const handleDelete = () => {
    const deleteInput = inputValue.toString().trim().slice(0, -1);
    setInputValue(deleteInput);
    setCalStr("");
  };

  return (
    <div className="main container">
      <header>
        <h1>calc</h1>
        <div className="theme__container" onClick={handleTheme}>
          <i className="bx bx-sun"></i>
          <i
            className={`bx ${isDark ? "bx-toggle-right" : "bx-toggle-left"}`}
            id="theme-button"
          ></i>
          <i className="bx bx-moon"></i>
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <section className="input__container">
          <span>{calStr}</span>
          <input
            value={inputValue}
            onChange={handleInput}
            type="text"
            className="input__field"
            autoFocus
          />
        </section>

        <section className="key__background grid">
          <button type="button" onClick={handleNum} className="btn numkeys">
            7
          </button>
          <button type="button" onClick={handleNum} className="btn numkeys">
            8
          </button>
          <button type="button" onClick={handleNum} className="btn numkeys">
            9
          </button>
          <button type="button" onClick={handleDelete} className="btn textkeys">
            DEL
          </button>

          <button type="button" onClick={handleNum} className="btn numkeys">
            4
          </button>
          <button type="button" onClick={handleNum} className="btn numkeys">
            5
          </button>
          <button type="button" onClick={handleNum} className="btn numkeys">
            6
          </button>
          <button type="button" onClick={handleNum} className="btn numkeys">
            +
          </button>

          <button type="button" onClick={handleNum} className="btn numkeys">
            1
          </button>
          <button type="button" onClick={handleNum} className="btn numkeys">
            2
          </button>
          <button type="button" onClick={handleNum} className="btn numkeys">
            3
          </button>
          <button type="button" onClick={handleNum} className="btn numkeys">
            -
          </button>

          <button type="button" onClick={handleNum} className="btn numkeys">
            .
          </button>
          <button type="button" onClick={handleNum} className="btn numkeys">
            0
          </button>
          <button type="button" onClick={handleNum} className="btn numkeys">
            /
          </button>
          <button type="button" onClick={handleNum} className="btn numkeys">
            x
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="btn textkeys reset"
          >
            RESET
          </button>
          <button type="submit" className="btn equalkey">
            =
          </button>
        </section>
      </form>
    </div>
  );
}

export default App;
