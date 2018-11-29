import React from 'react'

import Forms from './Forms'

class Auth extends React.Component {
    state = {
        email: '',
        password: '',
        isUserLoggedIn: false
    }
    onEmailHandler = event => {
        this.setState({ email: event.target.value })
    }
    onPasswordHandler = event => {
        this.setState({ password: event.target.value })
    }
    onLogClick
    onLogInByGoogleClick
    render() {
        return (
            <Forms
                email={this.state.email}
                onEmailHandler={this.onEmailHandler}
                password={this.state.password}
                onPasswordHandler={this.state.password}
            />

        )
    }
}
export default Auth