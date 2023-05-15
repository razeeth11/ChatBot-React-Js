import { useState } from "react"

export function Chatbot() {

  const [message,setMessage] = useState([
    {
      message : "Hello, Can i know your name ?"
    }
  ])

  return( 

  <div className="chatbot">
    <div className="chat-brand">
      <img src="./src/assets/chatbot.png" alt="" width='50px' height='50px'/>
      <h1>Chat-Bot</h1>
    </div>
    {message.map((data,index)=> <ChatMessage props={data} key={index}/> )}
    <div className="input">
      <input type="text" placeholder="Enter your query ..." />
      <button>Send</button>
    </div>
  </div>
  
  )
}

export function ChatMessage({props}){
  console.log(props)
  return(
    <div className="chat-message">
     {props.user ? (
      <span className="user-message">
        <p>{props.message}</p>
        <img src="./src/assets/user.png" alt="" width='30px'/>
      </span>
     ) : 
     <span className="bot-message">
        <img src="./src/assets/chatbot.png" alt="" width='30px'/>
        <p>{props.message}</p>
      </span>
      }
    </div>
  )
}
