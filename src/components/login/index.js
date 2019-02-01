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
      <div className="login">
        <form className="login__form">
          <h1 className="login__title">AnswerFlow</h1>
          <div className="login__input">
            <label for="email">EMAIL</label>
            <input type="text" name="email" />
          </div>
          <div className="login__input">
            <label for="password">PASSWORD</label>
            <input type="password" name="password" />
          </div>
          <p className="login__action">
            <input type="submit" name="go" id="go" value="Log in" />
          </p>
        </form>
      </div>
    );
  }
}

export default ChatIndex;
