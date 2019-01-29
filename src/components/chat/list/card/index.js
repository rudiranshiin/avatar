import React from 'react';

const ChatListCard = props => {
  return (
    <div className={`chat-list__item ${props.isActive ? 'active' : ''}`}>
      <div className="chat-list__images">
        <img
          className="main-pic"
          src={props.main_url}
          width="40"
          height="40"
          alt={props.main_url}
        />
        <img
          className="source-net"
          src={props.source_url}
          width="20"
          height="20"
          alt={props.source_url}
        />
      </div>
      <div className="chat-list__info">
        <h3 className="channel-name">{props.username}</h3>
        <div className="snippet">
          <div className="last-message">{props.last_message}</div>
        </div>
        <span className="timespan">{props.timespan}</span>
      </div>
    </div>
  );
};

export default ChatListCard;
