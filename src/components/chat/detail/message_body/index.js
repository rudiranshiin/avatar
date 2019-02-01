import React from 'react';
import ChatDetailMessage from 'components/chat/detail/message';
const ChatDetailMessageBody = () => (
  <div className="chat-detail__body">
    <div className="message-group">
      <div className="message-group__date">22 January 2019</div>
      <div className="message-group__list">
        <div className="message-card">
          <ChatDetailMessage type="sender" />
          <ChatDetailMessage type="receiver" />
          <ChatDetailMessage type="sender" />
          <ChatDetailMessage type="receiver" />
        </div>
      </div>
    </div>
  </div>
);

export default ChatDetailMessageBody;
