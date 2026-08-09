import { useState, type SubmitEvent, type KeyboardEvent, useEffect } from "react";
import '../assets/chat.css';
import Logo from "../components/clientsideComponents/Logo";
import { Link, useNavigate } from "react-router-dom";
import { chatService, getConversationsService, getUserNameService } from "../components/utills/ServiceLayer";
import UserBubble from "../components/clientsideComponents/UserBubble";
import MockChat from "../components/utills/MockChat";
import AgentBubble from "../components/clientsideComponents/AgentBubble";
import ConversationTitles from "../components/clientsideComponents/ConversationTitles";
import  { type Conversation } from "../components/utills/MockChatList";
import config from "../components/utills/Config";
import ReactMarkdown from "react-markdown";


const Chats = () => {

    const [theme, setTheme] = useState("light");
    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState("");
    const [, setError] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [chatId, setChatId] = useState<string | null>(null);
    const [chat, setChat] = useState(MockChat.chat);
    const [chatTitle, setChatTitle] = useState<Conversation[]>([]);
    const [chatTitleHeading, setChatTitleHeading] = useState('New chat');
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme);

        document.documentElement.setAttribute("data-theme", newTheme);
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                const resp = await getUserNameService();
                const data = resp as Record<string, string>;
                setUserName(data['username'].charAt(0));
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Unknown error";
                setError(errorMessage);
                console.log("`Chat` error due to ::" + errorMessage);
                navigate(config.BEFORE_LOGIN_PATH);
            }
        }

        const getConversation = async () => {
            try {
                const resp = await getConversationsService();
                const data = resp as Record<string, string>;

                // Replace the conversation list instead of appending to previous state
                setChatTitle(data['conversations'] as unknown as Conversation[]);
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Unknown error";
                setError(errorMessage);
                console.log("`Chat` error due to ::" + errorMessage);
                navigate(config.BEFORE_LOGIN_PATH);
            }
        }

        void getUser();
        // fetch conversations as well
        void getConversation();

    }, []);


    const submittingForm = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedMessage = message.trim();
        if (!trimmedMessage) return;

        setIsSending(true);
        setLoader(true);
        setChat((prevChat) => [...prevChat, { role: 'user', content: trimmedMessage, timeStamp: new Date().toISOString() }]);
        const txt = message;
        const messageId = chatId || null;
        setMessage("");

        try {
            const resp = await chatService(messageId, txt);
            const data = resp as Record<string, string>;
            setChat((prev) => [...prev, { role: 'agent', content: data['response'], timeStamp: new Date().toISOString() }])
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            setError(errorMessage);
            console.log("`Chat` error due to ::" + errorMessage);
        }

        setLoader(false);
        setIsSending(false);
    };

    const handleTextareaKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            e.currentTarget.form?.requestSubmit();
        }
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
                    {chatTitle.map((item, index) => (
                        <ConversationTitles key={index} id={item.id} title={item.title} meta={"Today"} setActiveChatId={setChatId} setChat={setChat} setChatTitleHeading={setChatTitleHeading} />
                    ))}
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
                        <span className="topbar-title"><ReactMarkdown>{chatTitleHeading}</ReactMarkdown></span>
                    </div>
                    <div className="topbar-right">
                        <span className="model-chip">llama3.1:8b</span>
                        <button className="avatar-btn" aria-label="Account menu">{userName}</button>
                        <button className="btn" onClick={toggleTheme}>
                            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                        </button>
                    </div>
                </div>

                <div className="messages">
                    <div className="messages-inner">
                        {chat.map((item, index) => {
                            if (item.role === 'user') {
                                return <UserBubble key={`user-${index}`} message={item.content} />;
                            }

                            if (item.role === 'agent') {
                                return (
                                    <AgentBubble key={`agent-${index}`} message={item.content} />
                                );
                            }

                            return null;
                        })}

                        {loader && (
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
                        )}

                    </div>
                </div>

                <form className="input-bar-wrap" onSubmit={submittingForm}>
                    <div className="input-bar">
                        <textarea
                            rows={1}
                            placeholder='Message Synapse... (Shift+Enter for a new line)'
                            id="queries"
                            name="queries"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={isSending}
                            onKeyDown={handleTextareaKeyDown}
                        ></textarea>
                        <button className="send-btn" aria-label="Send message" type="submit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="19" x2="12" y2="5" />
                                <polyline points="5 12 12 5 19 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="input-footnote">Synapse runs locally — responses come from your own Ollama instance.</div>
                </form>

            </div>
        </div>

    )
};
export default Chats;