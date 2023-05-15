import { useState } from "react";
import EcomSearch from '@ecomplus/search-engine'
import { analyse } from "./analyse";

export function Chatbot() {
  const [message, setMessage] = useState([
    {
      message: "Hello, Can i know your name ?",
    },
  ]);

  const [userMessage, setUserMessage] = useState("");

  const onSend = () => {
    let list = [...message, { message: userMessage, user: true }];
    console.log(list);
    if (list.length > 2) {
         analyse(userMessage)
    } else {
      list = [
        ...list,
        {
          message: `Hi ${userMessage}`
        },
        {
          message : "How can i help you ?"
        }
      ];
    }
    setMessage(list)
    setUserMessage("")
  };

  return (
    <div className="chatbot">
      <div className="chat-brand">
        <img src="./src/assets/chatbot.png" alt="" width="50px" height="50px" />
        <h1>Chat-Bot</h1>
      </div>
      {message.map((data, index) => (
        <ChatMessage props={data} key={index} />
      ))}
      <div className="input">
        <input
          type="text"
          placeholder="Enter your query ..."
          value={userMessage}
          onChange={(eve) => setUserMessage(eve.target.value)}
        />
        <button onClick={userMessage != "" ? onSend : null}>Send</button>
      </div>
    </div>
  );
}

export function ChatMessage({ props }) {
  return (
    <div className="chat-message">
      {props.user ? (
        <span className="user-message">
          <p>{props.message}</p>
          <img src="./src/assets/user.png" alt="" width="30px" />
        </span>
      ) : (
        <span className="bot-message">
          <img src="./src/assets/chatbot.png" alt="" width="30px" />
          <p>{props.message}</p>
        </span>
      )}
    </div>
  );
}
