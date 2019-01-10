import React, {Component} from 'react';

class Message extends Component {

  componentWillReceiveProps(newProps) {
  }

  render(){
    return (
      <div className="py-2-pct">
        <div className='chat-container'>
          <span className="chat-user">{this.props.message.user}</span>
          <img 
            className="userImg"
            src={require('../images/user.png')}/>
        </div>
        <div className='chat-container'>
          <div className="my-chat">
            {this.props.message.message}
          </div>

        </div>
      </div>
    )
  }
}
export default Message
