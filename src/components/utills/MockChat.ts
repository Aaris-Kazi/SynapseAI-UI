const MockChat = {
    chat : [
        {"user": "Can you review my JWT filter for null pointer risks?"},
        {"agent": "Sure — the most common issue in filters like this is calling getHeader(\"Authorization\") and immediately running substring(7) on it without checking for null or a missing \"Bearer \" prefix. If the header is absent, getHeader returns null, and null.substring() throws a NullPointerException before your filter chain even gets a chance to reject the request cleanly."},
        {"user": "Here's the class — what would you change first?"},
        {"agent": ""}
    ]
}

export default MockChat