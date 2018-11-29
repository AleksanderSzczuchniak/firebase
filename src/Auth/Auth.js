import React from 'react'
import { auth, googleProvider } from '../firebaseConfig'

import Forms from './Forms'

class Auth extends React.Component {
    state = {
        email: '',
        password: '',
        isUserLoggedIn: false
    }
    componentDidMount() {
        auth.onAuthStateChanged(
            user => {
                if (user) {
                    this.setState({ isUserLoggedIn: true })
                } else {
                    this.setState({ isUserLoggedIn: false })
                }
                console.log(user)
            }
        )
    }
    onEmailHandler = event => {
        this.setState({ email: event.target.value })
    }
    onPasswordHandler = event => {
        this.setState({ password: event.target.value })
    }
    onLogClick = () => {
        auth.signWithEmailPassword(this.state.email, this.state.password)
            .catch(error => {
                alert('Something is wrong! Check console for error details')
                console.log(error)
            })
    }

    onLogInByGoogleClick = () => {
        auth.signInWithPopup(googleProvider)
    }
    render() {
        return (
            this.state.isUserLoggedIn ?
                this.props.children
                :
                <Forms
                    email={this.state.email}
                    onEmailHandler={this.onEmailHandler}
                    password={this.state.password}
                    onPasswordHandler={this.onPasswordHandler}
                    onLogInClick={this.onLogInClick}
                    onLogInByGoogleClick={this.onLogInByGoogleClick}
                />

        )
    }
}
export default Auth