import React from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../constants/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Paths from '../constants/paths';

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirm, setPasswordConfirm] = React.useState('');
    const [error, setError] = React.useState('');

    const signup = async () => {
        if (username.length === 0 || email.length === 0 || password.length === 0) {
            setError('Please enter all fields.');
            return;
        }
        if (password !== passwordConfirm) {
            setError('Passwords do not match.');
            return;
        }
        createUserWithEmailAndPassword(firebase.auth(), email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });   
    }

    return(
        <main className="register">
            
            <section className='content-form'>
                <div className='inner-content'>
                    <h1>
                        Sign Up
                    </h1>

                    <form>
                        <div className='form-group'>
                            <label htmlFor='name'>
                                Username
                            </label>
                            <input 
                                type='text' 
                                id='name' 
                                className='form-control' 
                                placeholder="username" 
                                onChange={(e) => { setUsername(e.target.value) }} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>
                                Email
                            </label>
                            <input 
                                type='text' 
                                id='email' 
                                className='form-control' 
                                placeholder="email address"
                                onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>
                                Password
                            </label>
                            <input 
                                type='password' 
                                id='password' 
                                className='form-control'
                                placeholder="password"
                                onChange={(e) => {setPassword(e.target.value)}} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>
                                Confirm Password
                            </label>
                            <input 
                                type='password' 
                                id='password' 
                                className='form-control'
                                placeholder="confirm password" 
                                onChange={(e) => {setPasswordConfirm(e.target.value);}}/>
                        </div>

                        <div className="form-group">
                            <button 
                                type="button" 
                                className="button"
                                onClick={() => {signup();}}>
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className='error-message'>
                        {error}
                    </p>

                    <div className='link-register'>
                        <p>
                            Already have an account? <button className='link' onClick={() => { navigate(Paths.login) }}>Sign In</button>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Register;