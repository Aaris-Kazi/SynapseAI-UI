import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { googleLoginService } from "./ServiceLayer";
import { useNavigate } from "react-router-dom";
import config from "./Config";

const GoogleLoginButton = () => {
    const navigate = useNavigate();
    const handleGoogleSuccess = async (
        credentialResponse: CredentialResponse,
    ) => {
        if (!credentialResponse.credential) {
            console.error("Google credential missing");
            return;
        }

        try {
            await googleLoginService(credentialResponse.credential);

            navigate(config.AFTER_LOGIN_PATH);
            console.log("Google login successful");
        } catch (error) {
            console.error("Google login failed:", error);
        }
    };

    return (
            <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => {
                    console.log("error occured");
                }}
            />
        // <div className="btn-google2">

        // </div>
    );
};

export default GoogleLoginButton;
