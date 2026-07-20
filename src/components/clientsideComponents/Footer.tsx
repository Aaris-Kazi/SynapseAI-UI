import "../../assets/footer.css";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer>
            <div className="wrap footer-row">
                <div className="logo footerLogo">
                    <Logo />
                    Synapse AI
                </div>
                <div className="footer-links">
                    <a href="#features">Product</a>
                    <a href="#how-it-works">How it works</a>
                    <a href="#">Docs</a>
                    <a href="#">GitHub</a>
                </div>
                <div className="footer-note">Built on Ollama · ChatGPT · Oauth2 Google · Spring Boot · React</div>
            </div>
        </footer>

    )
}

export default Footer;