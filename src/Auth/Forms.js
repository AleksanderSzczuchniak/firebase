import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const Forms = (props) => (
    <Paper
        style={{
            position: 'fixed'
        }}
    >
        <TextField
            type="email"
            name="email"
            value={props.email}
            onChange={props.onEmailHandler}
            fullWidth={true}
            floatingLabelText="Email"

        />
        <TextField
            type="password"
            name="password"
            floatingLabelText="Password"
            value={props.password}
            onChange={props.onPasswordHandler}
            fullWidth={true}

        />
        <RaisedButton
            style={{ margin: '5px 0' }}
            label={'Log in'}
            primary={true}
            onClick={props.onLogClick}
            fullWidth={true}
        />
        <RaisedButton
            style={{ margin: '5px 0' }}
            label={'Password'}
            primary={true}
            onClick={props.onLogInByGoogleClick}
            fullWidth={true}

        />

    </Paper>
)
export default Forms