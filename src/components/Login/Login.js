import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { firebaseInitializeApp, signInWithPopup } from '../Firebase/Firebase';
import './Login.css';

firebaseInitializeApp();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };

    const handleGoogleLogin = () => {
        signInWithPopup()
            .then((res) => {
                setLoggedInUser(res);
                history.replace(from);
            })
            .catch((err) => setLoggedInUser(err));
    };

    return (
        <div className="login-social-media d-flex align-items-center justify-content-center">
            <button
                type="button"
                className="social-media-login w-75 d-block mx-auto my-2 py-2 rounded-pill"
                onClick={handleGoogleLogin}
            >
                <span
                    className="social-icon"
                    style={{ backgroundColor: '#E04831' }}
                >
                    <FontAwesomeIcon icon={faGoogle} />
                </span>
                Continue with Google
            </button>
        </div>
    );
};

export default Login;
