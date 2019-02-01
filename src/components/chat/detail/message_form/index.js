import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const ChatDetailMessageForm = props => (
  <div className="chat-detail__form">
    <TextareaAutosize
      className="text-input"
      placeholder="Type a message"
      name="text"
      value={props.text}
      onChange={props.onHandleChange}
      onKeyDown={props.onKeyDown}
      style={{ maxHeight: 70 }}
      onResize={e => {}}
    />
  </div>
);

export default ChatDetailMessageForm;
