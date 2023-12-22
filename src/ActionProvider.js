export class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleGotIt = () => {
    const message = this.createChatBotMessage("Pick A Slot!", {
      widget: "gotIt",
    });
    this.updateChatbotState(message);
  };

  handleDate = () => {
    const message = this.createChatBotMessage("Enter Your Name");
    this.updateChatbotState(message);
  };

  handleUserName = (name) => {
    const message = this.createChatBotMessage(`Your name is ${name}`);
    this.updateChatbotState(message);
  };

  age = () => {
    const message = this.createChatBotMessage("Enter Your Age");
    this.updateChatbotState(message);
  };

  handleUserAge = () => {
    const message = this.createChatBotMessage(
      "Thank You, The bot will now exit in 5 Seconds!"
    );
    this.updateChatbotState(message);

    setTimeout(() => {
      this.handleRedirect();
    }, 5000);
  };

  handleRedirect = () => {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  updateChatbotState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
