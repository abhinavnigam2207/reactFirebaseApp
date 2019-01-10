import React, { Component } from 'react';
// import { connect } from 'react-redux';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import Header from './components/Header';
import firebase from 'firebase';


// const LoginOrChat = connect(
//   (state) => ({
//       authorized: state.user.authorized
//   })
// )(({ authorized, dispatch }) => {
//   if (authorized) {
//       // return (<Chat/>);
//   }else{
//       // dispatch(checkUserExists());
//       // return (<LoginUI />);
//   }
// });

class App extends Component {

constructor(props){
  super(props);
  const config = {
    apiKey: "AIzaSyCxxuyNTSy9lYH8nWIg5thU5MhYNJaHJbE",
    authDomain: "react-firebase-chat-fa748.firebaseapp.com",
    databaseURL: "https://react-firebase-chat-fa748.firebaseio.com",
    projectId: "react-firebase-chat-fa748",
    storageBucket: "react-firebase-chat-fa748.appspot.com",
    messagingSenderId: "725538755451"
  };
  firebase.initializeApp(config);
}

  render() {
    return (
      <div className="container">
            <Header title="React Firebase App" />
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6 chat-window">
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
    );
  }
}

export default App;
