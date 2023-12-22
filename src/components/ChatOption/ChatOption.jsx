import React from "react";
import './ChatOption.css';

const ChatOption = (props) => {
    const options = [
        { text:'Got IT!', handler: props.actionProvider.handleGotIt, id:1 },
    ];

    const optionsMarkup = options.map((option) => (
        <button
          className="chat-option-button"
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
      ));
    
      return <div className="chat-options-container">{optionsMarkup}</div>;
    };

export default ChatOption;