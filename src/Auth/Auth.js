import React from 'react'
import Paper from 'material-ui/Paper'
import { TextField, RaisedButton } from 'material-ui/'

class Auth extends React.Component {
    state = {
        email: '',
        password: ''
    }
    onEmailHandler = event => {
        this.setState({ email: event.target.value })
    }
    onPasswordHandler = event => {
        this.setState({ password: event.target.value })
    }
    render() {
        return (
            <Paper
                style={{
                    position: 'fixed'
                }}
            >
                <TextField
                    type='email'
                    name="email"
                    value={this.state.email}
                    onChange={this.onEmailHandler}
                    fullWidth={true}

                />
                <TextField
                    type='password'
                    name="password"
                    value={this.state.password}
                    onChange={this.onPasswordHandler}
                    fullWidth={true}

                />
                <RaisedButton
                    style={{ margin: '5px 0' }}
                    label={'Log in'}
                    primary={true}
                    onClick={this.onLigClick}
                    fullWidth={true}
                />
                <RaisedButton
                    style={{ margin: '5px 0' }}
                    label={'Password'}
                    primary={true}
                    onClick={this.onLigClick}
                    fullWidth={true}

                />

            </Paper>
        )
    }
}
export default Auth