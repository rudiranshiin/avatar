import React from 'react';
import ListHeader from 'components/chat/list/header';
import ListCard from 'components/chat/list/card';
import fmLogo from 'assets/images/fm-logo.png';
import smsLogo from 'assets/images/sms-logo.jpg';
import waLogo from 'assets/images/wa-logo.png';

class ChatList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="chat-field__list chat-list">
        <ListHeader />
        <div className="chat-list__body">
          <ListCard
            username="rudiyanto"
            main_url="https://cdn.shopify.com/s/files/1/1443/2548/products/8A596375-1799-43AA-99E3-113DDDA1D1D1-405-0000008BE650EE5D_large.jpeg?v=1532922073"
            source_url={fmLogo}
            isActive={true}
            last_message={
              'testong testong testong testong testong testong testong'
            }
            timespan="yesterday"
          />
          <ListCard
            username="alam"
            main_url="https://cdn.shopify.com/s/files/1/1443/2548/products/8A596375-1799-43AA-99E3-113DDDA1D1D1-405-0000008BE650EE5D_large.jpeg?v=1532922073"
            source_url={waLogo}
            isActive={false}
            last_message={
              'testong testong testong testong testong testong testong'
            }
            timespan="today"
          />
          <ListCard
            username="unknown"
            main_url="https://cdn.shopify.com/s/files/1/1443/2548/products/8A596375-1799-43AA-99E3-113DDDA1D1D1-405-0000008BE650EE5D_large.jpeg?v=1532922073"
            source_url={smsLogo}
            isActive={false}
            last_message={
              'testong testong testong testong testong testong testong'
            }
            timespan="6 : 28 PM"
          />
        </div>
      </div>
    );
  }
}

export default ChatList;
