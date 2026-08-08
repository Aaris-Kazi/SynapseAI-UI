import { useNavigate } from "react-router-dom";
import { removeAccessToken } from "../components/utills/ServiceLayer";
import config from "../components/utills/Config";
import { useEffect } from "react";

const Logout= () => {

    const navigate = useNavigate();
    removeAccessToken();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(config.BEFORE_LOGIN_PATH);
        }, 500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
};

export default Logout;