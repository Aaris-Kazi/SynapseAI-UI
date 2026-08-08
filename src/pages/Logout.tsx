import { useNavigate } from "react-router-dom";
import { removeAccessToken } from "../components/utills/ServiceLayer";
import config from "../components/utills/Config";

const Logout= () => {

    const navigate = useNavigate();
    removeAccessToken();
    navigate(config.BEFORE_LOGIN_PATH);
    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
};

export default Logout;