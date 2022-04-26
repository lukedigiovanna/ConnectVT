import React from "react";
import { useNavigate } from "react-router-dom";
import Paths from '../constants/paths';

function Login() {
    const navigate = useNavigate();

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
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input 
                                type='password' 
                                id='password'
                                placeholder='Enter your password' 
                            />
                        </div>

                        <div className='form-group'>
                            <button> Sign In </button>
                        </div>
                    </form>

                    <div className='link-register'>
                        <p>
                            Don't have an account? <button className='link' onClick={() => { navigate(Paths.register) }}>Sign Up</button>
                        </p>
                    </div>
                </div>
            </section>

            <figure className='background-image'>  </figure>
        </main>
    );
}

export default Login;