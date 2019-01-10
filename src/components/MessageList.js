import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      showChat: []
    };
    let app = this.props.db.database().ref('messages');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
    this.loadMore = this.loadMore.bind(this);
  }
  
  getData = (values) => {
    let messagesVal = values;
    let messages = _(messagesVal)
    .keys()
    .map(messageKey => {
      let cloned = _.clone(messagesVal[messageKey]);
      cloned.key = messageKey;
      return cloned;
    })
    .value();
    this.setState({
      messages: messages,
      showChat: messages.slice(messages.length-10, messages.length)
    });
  }

  loadMore = () => {
    const msgLength = this.state.messages.length;
    const showChatlength = this.state.showChat.length;
    let startChatIndex = showChatlength < msgLength ? msgLength-showChatlength-10 : 0;
    startChatIndex = startChatIndex>=0 ? startChatIndex : 0;
    this.setState({
      showChat: this.state.messages.slice(startChatIndex, msgLength)
    });
  }

  render = () => {
    let messageNodes = this.state.showChat.map((message) => {
      return (
        <div className="">
            <Message message = {message} />
        </div>
      )
    });
    if(this.state.showChat.length && this.state.showChat.length!==0 && this.state.showChat.length!==this.state.messages.length) {
      return (
        <div>
          <div className="load-btn" onClick={this.loadMore}>Load More</div>
          {messageNodes}
        </div>
      );
    }
    else {
      return (
        <div>
          {messageNodes}
        </div>
      );
    }
  }
}

export default MessageList
