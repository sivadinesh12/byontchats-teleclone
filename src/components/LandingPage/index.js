import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ChatItem from "../ChatItem";
import MessageItem from "../MessageItem";
import "./index.css";

class LandingPage extends Component {
  state = {
    chats: [],
    activeTabId: "",
    isNightModeOn: true,
    activeChatmessages: [],
    searchInput: "",
  };

  handleEscbtn = (event) => {
    if (event.key === "Escape") {
      this.setState({ activeTabId: "" });
    }
  };

  componentDidMount() {
    this.getChats();
    document.addEventListener("keydown", this.handleEscbtn);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.activeTabId !== prevState.activeTabId) {
      this.getchatByid(this.state.activeTabId);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscbtn);
  }

  getChats = async () => {
    const url = "https://devapi.beyondchats.com/api/get_all_chats?page=1";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    this.setState({
      chats: data.data.data,
    });
  };

  handleActiveTabId = (id) => {
    this.setState({ activeTabId: id });
  };

  toggleNightMode = () => {
    this.setState((prevState) => ({ isNightModeOn: !prevState.isNightModeOn }));
  };

  getchatByid = async (id) => {
    const url = `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    this.setState({ activeChatmessages: data.data });
  };

  renderTopSection = () => {
    const { chats, activeTabId, isNightModeOn } = this.state;
    const filterChatDetails = chats.filter((chat) => chat.id === activeTabId);
    const { creator } = filterChatDetails[0];
    const { name } = creator;
    console.log(chats);
    return (
      <div>
        <p
          className={`msg-sec-user-name ${
            isNightModeOn ? "" : "msg-sec-user-name-lm"
          }`}
        >
          {name !== null ? `${name}` : "user"}
        </p>
        <div></div>
      </div>
    );
  };

  handleSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const {
      chats,
      activeTabId,
      isNightModeOn,
      activeChatmessages,
      searchInput,
    } = this.state;
    const filteredChats = chats.filter((chat) => {
      const name = chat.creator.name;
      if (searchInput === "") {
        return true;
      }
      return name && name.toLowerCase().includes(searchInput.toLowerCase());
    });
    console.log(filteredChats);
    return (
      <div className="bg-container">
        <div
          className={`chats-list-section ${
            isNightModeOn ? "" : "chats-list-section-lm"
          }`}
        >
          <div className="search-container">
            <Popup
              trigger={
                <FontAwesomeIcon
                  icon={faBars}
                  className={isNightModeOn ? "icon" : "icon-lm"}
                />
              }
              position="bottom left"
            >
              <ul className={`menu-popup ${isNightModeOn ? "" : "popup-lm"}`}>
                <p className="popup-item">Saved messages</p>
                <p className="popup-item">Contacts</p>
                <p className="popup-item">My Stories</p>
                <p className="popup-item">Settings</p>
                <div className="nightmode-switch ">
                  <p>Night Mode</p>
                  <div
                    className={`switch ${isNightModeOn ? "on" : "off"}`}
                    onClick={this.toggleNightMode}
                  >
                    <div className="toggle" />
                  </div>
                </div>
                <p className="popup-item">Telegram Features</p>
                <p className="popup-item">Report a bug</p>
              </ul>
            </Popup>
            <input
              type="search"
              className={`input ${isNightModeOn ? "" : "input-lm"}`}
              placeholder="Search"
              onChange={this.handleSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="chat-list">
            {filteredChats.map((eachItem) => (
              <ChatItem
                key={eachItem.id}
                itemDetails={eachItem}
                activeTabId={activeTabId}
                handleActiveTabId={this.handleActiveTabId}
                isNightModeOn={isNightModeOn}
              />
            ))}
          </ul>
        </div>
        {activeTabId === "" ? (
          <div
            className={`msg-section ${isNightModeOn ? "" : "msg-section-lm"}`}
          ></div>
        ) : (
          <div
            className={`msg-section ${isNightModeOn ? "" : "msg-section-lm"}`}
          >
            <div
              className={`topSection ${isNightModeOn ? "" : "topSection-lm"}`}
            >
              {this.renderTopSection()}
            </div>
            {activeChatmessages && activeChatmessages.length > 0 ? (
              <ul className="chat-msg-list">
                {activeChatmessages.map((eachItem) => (
                  <MessageItem
                    msgDetails={eachItem}
                    key={eachItem.id}
                    isNightModeOn={isNightModeOn}
                  />
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    );
  }
}

export default LandingPage;
