import { useState } from "react";
import "../../assets/nav.css"
import Logo from "./Logo";

const Headers = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <header className="p-3 navbar justify-between">
      <h2 className="text-2xl font-bold logo">
        <Logo />
        SynapseAI
        </h2>
      <ul className="nav justify-between">
        <li className="nav-item">
          <button className="btn font-bold highlight">Login</button>
        </li>
        <li className="nav-item">
          <button className="btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Headers;
