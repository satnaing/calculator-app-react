import { useEffect, useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import { evaluate } from "mathjs";

function App() {
  const [theme, setTheme] = useLocalStorage("dark-theme", false);
  const [isDark, setIsDark] = useState(theme);
  const [inputValue, setInputValue] = useState("");
  const [calStr, setCalStr] = useState("");
  const [calResult, setCalResult] = useState(false);
  const [currentNum, setCurrentNum] = useState("");

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
    let val = e.target.innerText;
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

    // Check if input is number or operators
    if (nums.includes(val.toString())) {
      // Validation for multiple dots (.)
      if (currentNum.includes(".") && val === ".") return;
      if (currentNum === "" && val === ".") val = "0.";
      setCurrentNum(currentNum + val);

      // Check if input is right after the result
      // if so, and the input is number, clear the input field.
      if (calResult) {
        setInputValue(currentNum + val);
        setCalStr("");
        setCalResult(false);
      } else {
        setInputValue(inputValue + val);
      }
    } else {
      setInputValue(` ${inputValue} ${val} `);
      setCalResult(false);
      setCurrentNum("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set current number after submit
    setCurrentNum("");

    // Return inputValue if no calculation is made
    const operators = ["+", "-", "x", "/"];
    const calcExp = operators.some((op) => inputValue.includes(op));
    if (!calcExp) return inputValue;

    // trim extra spaces
    let inputString = inputValue.trim();

    // Replace x with * to calculate multiplication
    inputString = inputValue.replace(/x/g, "*");

    // Remove comma to calculate properly
    inputString = inputString.replace(/,/g, "");

    // remove extra operators (+ - * /) before calculation
    inputString = inputString.replace(/.+?(?=\d)/, "");

    // remove extra operators (+ - * /) after calculation
    inputString = inputString.replace(/(?<=(\d+)(?!.*\d)).*/, "");

    // toLocaleString is for comma separation
    setInputValue(evaluate(inputString).toLocaleString());

    // Set calculation string on top of the result
    setCalStr(inputString.replace(/\*/g, "x"));

    // Nums are calculated, thus calResult is set true
    setCalResult(true);
  };

  const handleReset = () => {
    setCalStr("");
    setInputValue("");
    setCurrentNum("");
  };

  const handleDelete = () => {
    // Delete the last character from inputValue
    const deleteInput = inputValue.toString().trim().slice(0, -1);
    let singleInput;

    // Check if inputValue is the last character
    if (deleteInput.length > 1) {
      // if inputValue is not last character,
      // last number (including decimal) will be current single number
      singleInput = deleteInput.match(/\d+\.?\d?(?=\D*$)/)[0];
    } else {
      singleInput = deleteInput;
    }

    setInputValue(deleteInput);
    setCurrentNum(singleInput);
    setCalStr("");
  };

  return (
    <div className="main container">
      <header>
        <h1>calc</h1>
        <div className="theme__container" onClick={handleTheme}>
          <i className="bx bx-sun bx-tada"></i>
          <i
            className={`bx ${isDark ? "bx-toggle-right" : "bx-toggle-left"}`}
            id="theme-button"
          ></i>
          <i className="bx bx-moon bx-flashing"></i>
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
            readOnly
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
