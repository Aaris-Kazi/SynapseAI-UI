export type Conversation = {
    id: string;
    title: string;
    timeStamp: string;
};

const MockChatList: { chat: Conversation[] } = {
    chat : [
        {id: "ea47138f-7eb8-429e-b292-35a61c2e154e", title: "New Delhi Capital", timeStamp: "2023-08-01T10:00:00Z"},
        {id: "c9e72ca2-f3c4-42cd-898f-151413d76565", title: "**World's Hardest Material**", timeStamp: "2023-08-01T10:00:00Z"},
        {id: "be488248-afbd-4942-b03a-3508256c3200", title: "**What Is Iron**", timeStamp: "2023-08-01T10:00:00Z"},
    ]
}

export default MockChatList