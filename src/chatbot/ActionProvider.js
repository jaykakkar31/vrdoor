class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleProperty(){
    const message = this.createChatbotMessage('Please go to property page.');

    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }

  handleContact() {
    const message = this.createChatbotMessage('Hi, Thanks you for contacting us!, Please call us at +91 9871500975');

    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }
}



export default ActionProvider;