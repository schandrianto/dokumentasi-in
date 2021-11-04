import Login, { STATE_LOGIN } from '../components/Login';
import Register from '../components/Register';
import React from 'react';

class AuthPage extends React.Component {
  handleAuthState = authState => {
    if (authState === STATE_LOGIN) {
      this.props.history.push('/login');
    } else {
      this.props.history.push('/register');
    }
  };

  handleLogoClick = () => {
    this.props.history.push('/');
  };
  
  render() {
    const status = this.authState;

    return (
        <div>
            {status
                ? <Login/>
                : <Register/>
            }
        </div>
    );
  }
}

export default AuthPage;
