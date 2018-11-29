import React from 'react'
import { auth, googleProvider } from '../firebaseConfig'
import FloatingActionButton from 'material-ui/FloatingActionButton'
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
    onLogOutClickHandler = () => {
        auth.signOut()
    }
    render() {
        return (
            this.state.isUserLoggedIn ?
                <div>
                    <FloatingActionButton
                        style={{
                            position: 'fixed',
                            top: 10,
                            right: 10,
                            zIndex: 9999,
                        }}
                        secondary={true}
                        onClick={this.onLogOutClickHandler}
                    >
                    X
                    </FloatingActionButton>
                    {this.props.children}
            </div>
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