import React, { useState } from 'react';
import './ChatbotComponent.css';
import 'react-chatbot-kit/build/main.css'
import { Chatbot } from 'react-chatbot-kit';
import { config } from './config'; // Import your chatbot configuration
import { MessageParser } from './MessageParser';
import { ActionProvider } from './ActionProvider';
// import UserInput from './UserInput';


function ChatbotComponent() {
    const [chatbotVisible, setChatbotVisible] = useState(false);

    const startChatbot = () =>{
        setChatbotVisible(true);
    }

    // const handleUserInput = (userMessage) => {
    //   config.actionProvider.handleUserInput(userMessage);
    // };

  return (
    <div className="chatbot-container">
    <h1 className='h1'>Enter Into Student Info System</h1>
    <button className='button' onClick={startChatbot}>Enroll Now !</button>
     {chatbotVisible && 
     <>
     <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    {/* <UserInput onSubmit={handleUserInput} /> */}
     </> 
     }
     </div>
  );
}

export default ChatbotComponent;