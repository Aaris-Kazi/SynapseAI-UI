import { Link, useNavigate } from "react-router-dom";
import "../assets/login.css";
import Headers from "../components/clientsideComponents/Headers";
import { useEffect, useState } from "react";
import type { SubmitEvent } from "react";
import Loader from "../components/clientsideComponents/Loader";
import { getAccessToken, registerService } from "../components/utills/ServiceLayer";
import GoogleLoginButton from "../components/utills/GoogleLoginButton";
import config from "../components/utills/Config";

const Register = () => {

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [, setError] = useState("");
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = getAccessToken();
        if (token) {
            navigate(config.AFTER_LOGIN_PATH);
        }
    }, [navigate]);

    const submittingForm = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoader(true);
        try {
            await registerService(firstName, lastName, username, email, password);
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
                        <h1>Create your account</h1>
                        <p>Start chatting with your own models</p>
                    </div>

                    {/* <button className="btn-google" type="button" onClick={handleGoogleAlert2}>
                        <Googleicon />
                        Sign up with Google
                    </button> */}
                    <GoogleLoginButton />

                    <div className="divider">or sign in with email</div>

                    <form onSubmit={submittingForm}>
                        <div className="name-row">
                            <div className="field">
                                <label htmlFor="firstName">First name</label>
                                <input id="firstName" type="text" placeholder="Ada" onChange={(e) => setFirstName(e.target.value)} required />
                            </div>
                            <div className="field">
                                <label htmlFor="lastName">Last name</label>
                                <input id="lastName" type="text" placeholder="Lovelace" onChange={(e) => setLastName(e.target.value)} required />
                            </div>
                            <div className="field">
                                <label htmlFor="userName">User name</label>
                                <input id="userName" type="text" placeholder="ada_love" onChange={(e) => setUsername(e.target.value)} required />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} required minLength={8} />
                            <div className="field-hint">At least 8 characters.</div>
                        </div>

                        <div className="checkbox-row">
                            <input id="terms" type="checkbox" required />
                            <label className="textHandler" htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</label>
                        </div>

                        <button type="submit" className="login-btn-primary">{loader&&(<Loader />)}{!loader&&("Create account")}</button>
                    </form>
                    <div className="card-foot">

                        Already have an account? <Link to={'/login'}>Sign in</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
