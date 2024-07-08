import "./index.css";

const MessageItem = (props) => {
  const { msgDetails, isNightModeOn } = props;
  const { sender, message } = msgDetails;
  const { name } = sender;
  console.log(msgDetails);
  return (
    <li className="chat-msg-list-item">
      <div className="msg-constaiener">
        <h1 className={isNightModeOn ? "nm-prof" : "lm-prof"}>
          {name === null ? "U" : `${name[0]}`.toLocaleUpperCase()}
        </h1>
        <div className={isNightModeOn ? "nm-msg-card" : "lm-msg-card"}>
          <h1 className={`msg-name ${isNightModeOn ? "nm" : "lm"}`}>
            {name === null ? "USER" : `${name}`.toLocaleUpperCase()}
          </h1>
          <p className={`message ${isNightModeOn?"nm":"lm"}`}>{message}</p>
        </div>
      </div>
    </li>
  );
};

export default MessageItem;
