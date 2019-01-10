import React, {Component} from 'react';
import trim from 'trim';
import {APP_CONSTANTS} from '../app.constants';

class MessageBox extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: ''
    };
    this.submitMessage = this.submitMessage.bind(this);
  }

  onChange(e){
    this.setState({
      message: e.target.value,
      user: APP_CONSTANTS.myUser
    });
  }

  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== ''){
      e.preventDefault();
      this.submitMessage();
    }
  }
  
  submitMessage(e) {
    let dbCon = this.props.db.database().ref('/messages');
    dbCon.push({
      message: trim(this.state.message),
      user: APP_CONSTANTS.myUser
    });
    this.setState({
      message: '',
      user: APP_CONSTANTS.myUser
    });
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
 }

  componentDidUpdate(prevProps, prevState) {
    const msgChatBox = document.querySelector('.chat-window');
    msgChatBox.scrollTo(0,msgChatBox.scrollHeight);
  }

  render() {
    return (
      <div>
        <form>
          <textarea
              className="textarea"
              placeholder="Type a message"
              cols="100"
              onChange={this.onChange}
              onKeyUp={this.onKeyup}
              value={this.state.message}>
            </textarea>
        </form>
        <button 
          className="submit-btn"
          onClick={this.submitMessage}>
          SEND
        </button>
      </div>
    )
  }
}

export default MessageBox
