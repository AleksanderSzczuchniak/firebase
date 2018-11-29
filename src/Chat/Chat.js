import React from 'react'
import { mapObjectToArray } from '../utils'

import { database } from '../firebaseConfig'

import NewMessageForm from './NewMessageForm'

const dbMessagesRef = database.ref('/jfddl6-messages')

class Chat extends React.Component {
  state = {
    newMessageText: 'krowa',
    messages: []
  }

  componentDidMount() {
    dbMessagesRef.on(
      'value',
      snapshot => this.setState({
        messeges: mapObjectToArray(snapshot.val())
      })
    )
  }

  onNewMessageTextChangeHandler = event => this.setState({ newMessageText: event.target.value })



  render() {
    return (
      <div>
        <NewMessageForm
          newMessageText={this.state.newMessageText}
          onNewMessageTextChangeHandler={this.onNewMessageTextChangeHandler}
          onNewMessageAddClickHandler={this.onNewMessageAddClickHandler}
        />
        {
          this.state.messages.map(message => (
            <div
              key={message.key}
            >
              {message.text}
            </div>
          ))
        }
      </div>
    )
  }
}
export default Chat