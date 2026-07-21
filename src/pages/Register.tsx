import { Link } from "react-router-dom";
import "../assets/login.css";
import Googleicon from "../components/clientsideComponents/GoogleIcon";
import Headers from "../components/clientsideComponents/Headers";
import { handleGoogleAlert2, handleGoogleAlert } from "../components/clientsideComponents/clientFunction";

const Register = () => {
    return (
        <>
            <Headers />
            <div className="loginPage">
                <div className="card">
                    <div className="card-head">
                        <h1>Create your account</h1>
                        <p>Start chatting with your own models</p>
                    </div>

                    <button className="btn-google" type="button" onClick={handleGoogleAlert2}>
                        <Googleicon />
                        Sign up with Google
                    </button>

                    <div className="divider">or sign in with email</div>

                    <form onSubmit={handleGoogleAlert}>
                        <div className="name-row">
                            <div className="field">
                                <label htmlFor="firstName">First name</label>
                                <input id="firstName" type="text" placeholder="Ada" required />
                            </div>
                            <div className="field">
                                <label htmlFor="lastName">Last name</label>
                                <input id="lastName" type="text" placeholder="Lovelace" required />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="you@example.com" required />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" placeholder="••••••••" required minLength={8} />
                            <div className="field-hint">At least 8 characters.</div>
                        </div>

                        <div className="checkbox-row">
                            <input id="terms" type="checkbox" required />
                            <label className="textHandler" htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</label>
                        </div>

                        <button type="submit" className="login-btn-primary">Create account</button>
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
