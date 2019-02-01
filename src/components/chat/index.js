import React from 'react';
import ChatList from 'components/chat/list';
import ChatDetail from 'components/chat/detail';

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
            <ChatDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatIndex;
