class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if(message.toLowerCase().includes('property')) {
      this.actionProvider.handleProperty();
    }

    if(message.toLowerCase().includes('contact')){
      this.actionProvider.handleContact();
    }
  }
}

export default MessageParser;