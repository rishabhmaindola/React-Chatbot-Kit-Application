export class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    
    if (/^[A-Za-z\s]+$/.test(message)) {
      if (lowerCaseMessage.includes(message.toLowerCase())) {
        this.actionProvider.handleUserName(message);
        this.actionProvider.age();
      }
    }

    const ageMatch = message.match(/\b\d+\b/);
    const age = ageMatch ? parseInt(ageMatch[0], 10) : null;

    if (age !== null) {
      this.actionProvider.handleUserAge(age);
      this.actionProvider.handleRedirect();
    }
  }
}

export default MessageParser;
