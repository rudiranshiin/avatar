import React from 'react';
import ChatList from 'components/chat/list';
class ChatIndex extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="chat-field">
        <div className="chat-field__index">
          <div className="chat-field__container">
            <ChatList />
            <div className="chat-field__detail">{''}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatIndex;
