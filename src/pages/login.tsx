import React from "react";
import { useNavigate } from "react-router-dom";
import Paths from '../constants/paths';
import firebase from '../constants/firebase';
// import { login } from '../utils/login-manager';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const login = async () => {
        // check to make sure both fields have something entered
        if (email.length === 0 || password.length === 0) {
            setError('Please enter both an email and password.');
            return;
        }

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            navigate(Paths.dashboard);
        } catch (error) {
            if (error instanceof Error) {
                setError("Email or password not found");
            }
        }
    }

    return (
        <main className="login">
            <section className='content-form'>
                <div className='inner-content'>
                    <h1>Login</h1>

                    <form>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input 
                                type='email' 
                                id='email' 
                                placeholder='Type your email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input 
                                type='password' 
                                id='password'
                                placeholder='Enter your password'
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>

                        <div className='form-group'>
                            <button type="button" onClick={() => {login();}}> Sign In </button>
                        </div>
                    </form>

                    <p className='error-message'>
                        {error}
                    </p>

                    <div className='link-register'>
                        <p>
                            Don't have an account? <button className='link' onClick={() => { navigate(Paths.register) }}>Sign Up</button>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;