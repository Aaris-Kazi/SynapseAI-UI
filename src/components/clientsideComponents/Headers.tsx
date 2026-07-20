import { useState } from "react";
import "../../assets/nav.css"
import Logo from "./Logo";
import { Link } from "react-router-dom";

interface HeaderProps {
  showLogin?: boolean;
}

const Headers = ({ showLogin = false }: HeaderProps) => {
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
        {showLogin && (
        <li className="nav-item">
          <Link to={'/login'} className="loginAnchor" >
            <button className="btn font-bold highlight">Login</button>
          </Link>
        </li>
        )}
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
