import React,{ useState} from "react";

function UserInput (props) {
    const [userMessage, setUserMessage] = useState('');

    const handleInputChange = (e) => {
        setUserMessage(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter')
        {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (userMessage.trim() !== '') {
            props.onSubmit(userMessage);
            setUserMessage('');
        }
    };

    return (
        <div className="user-input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={userMessage}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSubmit}>Send</button>
        </div>
      );
    
};

export default UserInput;