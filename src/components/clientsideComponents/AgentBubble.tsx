import ReactMarkdown from "react-markdown";
import Logo from "./Logo";

const AgentBubble = ({ message = "" }) => {
    return (
        <div className="row-assistant">
            <div className="assistant-avatar">
                <Logo />
            </div>
            <div className="assistant-text">
                <ReactMarkdown>{message}</ReactMarkdown>
            </div>
        </div>
    );
};

export default AgentBubble;