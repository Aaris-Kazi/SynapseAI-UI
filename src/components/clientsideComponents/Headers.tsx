import { useEffect, useState } from "react";
import "../../assets/nav.css"
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { getAccessToken, getUserNameService } from "../utills/ServiceLayer";

interface HeaderProps {
  showLogin?: boolean;
}

const Headers = ({ showLogin = false }: HeaderProps) => {
  const [theme, setTheme] = useState("light");
  const [userName, setUserName] = useState("Login");
  const [loginPath, setLoginPath] = useState("/login");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const getUser = async () => {
      if(getAccessToken() !== null) {
        try {
          const resp = await getUserNameService();
          const data = resp as Record<string, string>;
          setUserName(data['username']);
          setLoginPath("#");
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Unknown error";
          console.log("`Header` error due to ::" + errorMessage);
        }
      }
    }

    void getUser();

  }, []);


  return (
    <header className="p-3 navbar justify-between">

      <h2 className="text-2xl font-bold logo">
        <Logo />
        <Link to={'/'} className="nav-link">
          SynapseAI
        </Link>
      </h2>
      <ul className="nav justify-between">
        {showLogin && (
          
          <li className="nav-item">
            <Link to={loginPath} className="loginAnchor" >
              <button className="btn font-bold highlight">{userName}</button>
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
