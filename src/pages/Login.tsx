import { Link } from "react-router-dom";
import "../assets/login.css";
import Headers from "../components/clientsideComponents/Headers";
import { handleGoogleAlert, handleGoogleAlert2 } from "../components/clientsideComponents/clientFunction";
import Googleicon from "../components/clientsideComponents/GoogleIcon";

const Login = () => {


    return (
        <>
            <Headers />
            <div className="loginPage">
                <div className="card">
                    <div className="card-head">
                        <h1>Welcome back</h1>
                        <p>Sign in to continue to your models</p>
                    </div>

                    <button className="btn-google" type="button" onClick={handleGoogleAlert2}>
                        <Googleicon />
                        Continue with Google
                    </button>

                    <div className="divider">or sign in with email</div>
                    <form onSubmit={handleGoogleAlert} >
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="you@example.com" required />
                        </div>
                        <div className="field">
                            <div className="field-row">
                                <label htmlFor="password" style={{ marginBottom: "0px" }}>Password</label>
                                <a href="#">Forgot password?</a>
                            </div>
                            <input id="password" type="password" placeholder="••••••••" required style={{ marginTop: "7px" }} />
                        </div>
                        <button type="submit" className="login-btn-primary">Sign in</button>
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