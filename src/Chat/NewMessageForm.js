import React from 'react';
import TextFields from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import  Paper  from 'material-ui/Paper';


const NewMessageForm = (props) => (
  <div>
    <Paper
      style={{
        position: 'fixed',
        bottom: 0,
        padding: 20,
        width: '100%',
        zIndex: 9999
      }}
    >
      <TextFields
        type="text"
        value={props.newMessageText}
        onChange={props.onNewMessageTextChangeHandler}
        fullWidth={true}
        name="message"
      />
      <RaisedButton
        label={'ADD MESSAGE!'}
        onClick={props.onNewMessageAddClickHandler}
        primary={true}
        fullWidth={true}
      />
    </Paper>
  </div>
)

export default NewMessageForm