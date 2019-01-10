import React, {Component} from 'react';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase';

class Chat extends Component {
    
    render(){
        return (
            <div className="container">
                <Header title="Simple Firebase App" />
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <MessageList db={firebase} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <MessageBox db={firebase} />
                    </div>
                </div>
            </div>
            )
        }
    }

export default Chat;