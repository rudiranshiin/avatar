import React from 'react';
import ChatDetailHeader from 'components/chat/detail/header';
import ChatDetailBody from 'components/chat/detail/message_body';
import ChatDetailForm from 'components/chat/detail/message_form';
import chatIcon from 'assets/images/chat.png';
class ChatDetailIndex extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  onHandleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onHandleSendMessage = () => {
    console.log('sending');
    this.setState({
      text: ''
    });
  };

  onKeyDown(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      this.onHandleSendMessage();
    }
  }

  render() {
    const { text } = this.state;
    return (
      <div className="chat-field__detail chat-detail">
        {/* <div className="chat-detail__wrapper">
          <ChatDetailHeader />
          <ChatDetailBody />
          <ChatDetailForm
            text={text}
            onHandleChange={this.onHandleChange}
            onKeyDown={e => this.onKeyDown(e)}
          />
        </div> */}
        <div className="chat-detail__default-screen">
          <img src={chatIcon} alt="social media icon" width="50%" />
          <h3>Welcome :)</h3>
          <p>Read and reply all of social media message here.</p>
        </div>
      </div>
    );
  }
}

export default ChatDetailIndex;
