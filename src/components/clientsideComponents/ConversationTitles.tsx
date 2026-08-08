// import ReactMarkdown from "react-markdown";
// import ReactMarkdown from "react-markdown";
import type { Dispatch, SetStateAction } from "react";
import { getChatsService } from "../utills/ServiceLayer";

type ChatMessage = {
    role: string;
    content: string;
    timeStamp: string;
};

interface ConversationTitlesProps {
    id: string;
    title: string;
    meta?: string;
    setActiveChatId?: Dispatch<SetStateAction<string | null>>;
    setChat?: Dispatch<SetStateAction<ChatMessage[]>>;
    setChatTitleHeading?: Dispatch<SetStateAction<string>>;
}

const ConversationTitles = ({id = "", title = "", meta = "2h ago", setActiveChatId, setChat, setChatTitleHeading }: ConversationTitlesProps) => {

    const handleClick = async() => {
        const classElement = document.getElementsByClassName("conv-item active");

        if (classElement.length > 0) {
            for (let i = 0; i < classElement.length; i++) {
                classElement[i].className = "conv-item";
            }
        }

        const element = document.getElementById(id);
        if (setActiveChatId) {
            setActiveChatId(id);
        }
        if (element) {
            element.className = "conv-item active";
        }

        const chats = await getChatsService(id) as Record<string, unknown>;
        const messages = chats['messages'] as ChatMessage[];
        if (setChat) {
            setChat(messages);
        }
        
        if (setChatTitleHeading) {
            setChatTitleHeading(title);
        }
    };

    return (
        <div className="conv-item" id={id} onClick={handleClick}>
            {/* <ReactMarkdown children={title} /> */}
            {/* <div className="conv-title"><ReactMarkdown children={title} /></div> */}
            <div className="conv-title">{title}</div>
            <div className="conv-meta">{meta}</div>
        </div>
    )
}
export default ConversationTitles;
