// in ActionProvider.js
class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;

      this.createChatbotMessage = this.createChatbotMessage.bind(this);
    }
  
    handleHello() {
        console.log('this', this);
      let message = this.createChatbotMessage('Hello. Nice to meet you.');
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  
  export default ActionProvider;