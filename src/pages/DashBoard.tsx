import { Link } from "react-router-dom";
import "../assets/dashboard.css";
import Footer from "../components/clientsideComponents/Footer";
import Headers from "../components/clientsideComponents/Headers";
import { useEffect } from "react";
import { checkHealth } from "../components/utills/ServiceLayer";


const Dashboard = () => {

  useEffect(() => {
    void checkHealth();
  }, []);

  return (
    <>
    <Headers showLogin={true} />
    <div className="dashboard">

      <section className="hero">
        <div className="eyebrow">
          <span className="pulse-dot"></span>Running entirely on your own
          machine
        </div>
        <h1>
          Your own AI,
          <br />
          <span className="grad">thinking locally.</span>
        </h1>
        <p className="hero-sub">
          Synapse AI is a chat interface for the models you already run in
          Ollama or ChatGPT — private by default, fast on your own hardware, and
          yours to extend.
        </p>
        <div className="hero-ctas">
          <Link to={'/chat'} className="hero-btn-primary">
            Try Synapse
          </Link>
          <a href="#how-it-works" className="hero-btn-secondary">
            See how it works
          </a>
        </div>

        <div className="network-frame">
          <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
            <line className="edge" x1="90" y1="110" x2="260" y2="55" />
            <line className="edge" x1="90" y1="110" x2="260" y2="165" />
            <line className="edge" x1="260" y1="55" x2="440" y2="70" />
            <line className="edge" x1="260" y1="165" x2="440" y2="150" />
            <line className="edge" x1="440" y1="70" x2="440" y2="150" />
            <line className="edge" x1="440" y1="70" x2="610" y2="110" />
            <line className="edge" x1="440" y1="150" x2="610" y2="110" />

            <line className="signal d1" x1="90" y1="110" x2="260" y2="55" />
            <line className="signal d2 v" x1="260" y1="55" x2="440" y2="70" />
            <line className="signal d3" x1="440" y1="70" x2="610" y2="110" />
            <line className="signal d4 v" x1="90" y1="110" x2="260" y2="165" />

            <circle className="node" cx="90" cy="110" r="16" />
            <circle className="node" cx="260" cy="55" r="12" />
            <circle className="node" cx="260" cy="165" r="12" />
            <circle className="node node-active" cx="440" cy="70" r="13" />
            <circle className="node" cx="440" cy="150" r="13" />
            <circle className="node node-active" cx="610" cy="110" r="16" />
          </svg>
        </div>
      </section>

      <section className="features" id="features">
    <div className="wrap">
      <div className="section-head">
        <div className="section-tag">Product</div>
        <h2>Built for people who run their own models</h2>
        <p>A clean interface on top of infrastructure you control.</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <h3>Runs entirely on your machine</h3>
          <p>Every prompt and response stays inside your own Ollama instance. Nothing is sent to a third-party API.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12h16M4 6h16M4 18h10"/></svg>
          </div>
          <h3>Switch models mid-conversation</h3>
          <p>Move between Llama, Mistral, CodeLlama, or any model you've pulled — right from the chat.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="9"/></svg>
          </div>
          <h3>Full conversation history</h3>
          <p>Every thread is saved and organized, so you can pick up a conversation exactly where you left it.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12"/></svg>
          </div>
          <h3>Open backend, built to extend</h3>
          <p>A straightforward Spring Boot API sits between the UI and Ollama, so you can plug in your own tools.</p>
        </div>
      </div>
    </div>
  </section>

      <section id="how-it-works">
        <div className="wrap">
          <div className="section-head">
            <div className="section-tag">How it works</div>
            <h2>Three steps to a private AI setup</h2>
            <p>
              No accounts, no cloud dependency — just your machine and a model.
            </p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <h3>Pull a model</h3>
              <p>Grab any model you like through Ollama.</p>
              <code>ollama pull llama3.1:8b</code>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>Start Synapse</h3>
              <p>Launch the Spring Boot backend and the chat UI locally.</p>
              <code>./mvnw spring-boot:run</code>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>Start chatting</h3>
              <p>
                Open the app, pick a model, and start a conversation — fully
                private, fully yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cta-banner">
            <h2>Start chatting with your own models</h2>
            <p>
              Synapse AI is free, self-hosted, and built on top of the models
              you already run.
            </p>
            <a href="#" className="hero-btn-primary">
              Get started
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Dashboard;
