import { Link, useNavigate } from "react-router-dom";
import "../assets/login.css";
import Headers from "../components/clientsideComponents/Headers";
import { useState } from "react";
import type { SubmitEvent } from "react";
import { loginService } from "../components/utills/ServiceLayer";
import Loader from "../components/clientsideComponents/Loader";
import GoogleLoginButton from "../components/utills/GoogleLoginButton";
import config from "../components/utills/Config";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, setError] = useState("");
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const submittingForm = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoader(true);
        try {
            await loginService(username, password);
            navigate(config.AFTER_LOGIN_PATH)
            
            
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unknown error";
            setError(message);
            console.log("`Login` error due to ::" + message);
            
        }
        setLoader(false);
    };


    return (
        <>
            <Headers />
            <div className="loginPage">
                <div className="card">
                    <div className="card-head">
                        <h1>Welcome back</h1>
                        <p>Sign in to continue to your models</p>
                    </div>

                    {/* <button className="btn-google" type="button" onClick={handleGoogleAlert2}>
                        <Googleicon />
                        Continue with Google
                    </button> */}
                    <GoogleLoginButton />

                    <div className="divider">or sign in with email</div>
                    <form onSubmit={submittingForm} >
                        <div className="field">
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" name="username" placeholder="aaris_kazi" value={username}
                                            onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="field">
                            <div className="field-row">
                                <label htmlFor="password" style={{ marginBottom: "0px" }}>Password</label>
                                <a href="#">Forgot password?</a>
                            </div>
                            <input id="password" type="password" name="password" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} required style={{ marginTop: "7px" }} />
                        </div>
                        <button type="submit" className="login-btn-primary">{loader&&(<Loader />)}{!loader&&("Sign in")}</button>
                    </form>

                    <div className="card-foot">

                        Don't have an account? <Link to={'/register'}>Sign up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;