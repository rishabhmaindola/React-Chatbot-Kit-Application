import React from "react";
import "./App.css";
import ChatbotComponent from "./ChatbotComponent";

function App() {
  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };

  return (
    <div className="App">
      <ChatbotComponent
        messageHistory={loadMessages()}
        saveMessages={saveMessages}
      />
    </div>
  );
}

export default App;
