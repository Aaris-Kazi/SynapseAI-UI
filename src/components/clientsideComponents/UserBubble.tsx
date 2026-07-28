const UserBubble = ({message = ""}) => {
    return (
        <div className="row-user">
            <div className="bubble-user">{message}</div>
        </div>
    );
}

export default UserBubble;