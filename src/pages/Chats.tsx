import { useState } from "react";
import '../assets/chat.css';
import Logo from "../components/clientsideComponents/Logo";
import { Link } from "react-router-dom";
const Chats = () => {

    const [theme, setTheme] = useState("light");
    
      const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
    
        setTheme(newTheme);
    
        document.documentElement.setAttribute("data-theme", newTheme);
      };
    return (

        <div className="app">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <div className="brand">
                        <Logo />
                        <Link to={'/'}>
                        <span>Synapse AI</span>
                        </Link>
                    </div>
                    <button className="icon-btn" aria-label="Collapse sidebar">‹</button>
                </div>

                <button className="new-chat-btn">
                    <span style={{ fontSize: "16px", lineHeight: 1 }}>+</span> New chat
                </button>

                <div className="conv-list-label">History</div>
                <div className="conv-list">
                    <div className="conv-item active">
                        <div className="conv-title">Refactor auth service</div>
                        <div className="conv-meta">2h ago</div>
                    </div>
                    <div className="conv-item">
                        <div className="conv-title">Explain WebAssembly memory model</div>
                        <div className="conv-meta">Yesterday</div>
                    </div>
                    <div className="conv-item">
                        <div className="conv-title">Spring Boot vs Micronaut</div>
                        <div className="conv-meta">3 days ago</div>
                    </div>
                    <div className="conv-item">
                        <div className="conv-title">Docker healthcheck for Ollama</div>
                        <div className="conv-meta">Last week</div>
                    </div>
                    <div className="conv-item">
                        <div className="conv-title">React state management options</div>
                        <div className="conv-meta">Last week</div>
                    </div>
                </div>

                <div className="model-picker">
                    <div className="model-label">model</div>
                    <div className="model-prompt-row">
                        <span className="prompt-glyph">$</span>
                        <span className="model-name">llama3.1:8b</span>
                    </div>
                </div>
            </aside>


            <div className="main">

                <div className="topbar">
                    <div className="topbar-left">
                        <span className="topbar-title">Refactor auth service</span>
                    </div>
                    <div className="topbar-right">
                        <span className="model-chip">llama3.1:8b</span>
                        <button className="avatar-btn" aria-label="Account menu">WH</button>
                        <button className="btn" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
                    </div>
                </div>

                <div className="messages">
                    <div className="messages-inner">

                        <div className="row-user">
                            <div className="bubble-user">Can you review my JWT filter for null pointer risks?</div>
                        </div>

                        <div className="row-assistant">
                            <div className="assistant-avatar">
                                <Logo />
                            </div>
                            <div className="assistant-text">
                                <p>Sure — the most common issue in filters like this is calling getHeader("Authorization") and immediately running substring(7) on it without checking for null or a missing "Bearer " prefix. If the header is absent, getHeader returns null, and null.substring() throws a NullPointerException before your filter chain even gets a chance to reject the request cleanly.</p>
                                <p>A safer pattern is to guard early: check the header is non-null and starts with "Bearer " before touching it, and let anything else fall through to an explicit 401. Paste the class whenever you're ready and I'll go through it line by line.</p>
                            </div>
                        </div>

                        <div className="row-user">
                            <div className="bubble-user">Here's the class — what would you change first?</div>
                        </div>

                        <div className="row-assistant">
                            <div className="assistant-avatar">
                                <Logo />
                            </div>
                            <div className="typing-row">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="input-bar-wrap">
                    <div className="input-bar">
                        <textarea rows={1} placeholder='Message Synapse... (Shift+Enter for a new line)'></textarea>
                        <button className="send-btn" aria-label="Send message">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="19" x2="12" y2="5" />
                                <polyline points="5 12 12 5 19 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="input-footnote">Synapse runs locally — responses come from your own Ollama instance.</div>
                </div>

            </div>
        </div>

    )
};
export default Chats;