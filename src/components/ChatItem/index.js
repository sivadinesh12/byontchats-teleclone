import "./index.css";

const ChatItem = (props) => {
  const { itemDetails, handleActiveTabId, activeTabId, isNightModeOn } = props;
  const { id, creator, msg_count } = itemDetails;
  const { name } = creator;

  const handleListstyle = () => {
    handleActiveTabId(id);
  };

  return (
    <li
      className={`${
        isNightModeOn
          ? `list-item ${activeTabId === id ? "active" : ""}`
          : `list-item ${activeTabId === id ? "active-lm" : ""}`
      }`}
      onClick={handleListstyle}
    >
      <div>
        {name !== null ? (
          <p className={`user-name ${isNightModeOn ? "" : "user-name-lm"}`}>
            {name[0]}
          </p>
        ) : (
          <p className={`user-name ${isNightModeOn ? "" : "user-name-lm"}`}>
            user
          </p>
        )}
      </div>
      <p className={`user-name ${isNightModeOn ? "" : "user-name-lm"}`}>
        {name}
      </p>
      <p
        className={`${
          isNightModeOn
            ? `msg-count ${activeTabId === id ? "active-msg-count" : ""}`
            : `msg-count-lm ${activeTabId === id ? "active-msg-count-lm" : ""}`
        }`}
      >
        {msg_count}
      </p>
    </li>
    //
  );
};

export default ChatItem;
