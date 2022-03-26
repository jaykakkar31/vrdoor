class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    if(message.toLowerCase().includes('property')) {
      this.actionProvider.handleProperty();
    }
    else if(message.toLowerCase().includes('contact')){
      this.actionProvider.handleContact();
    }
    else{
      this.actionProvider.anything();
    }
  }
}

export default MessageParser;